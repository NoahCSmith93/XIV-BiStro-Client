import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import { updateBest } from '../../api/best'
import BestForm from '../shared/BestForm'
import { getOneBest } from '../../api/best'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function BestEdit({ user, msgAlert }) {
    const [best, setBest] = useState(null)
    const [error, setError] = useState(false)
    const { id } = useParams()
    
    const navigate = useNavigate()

    useEffect(() => {
        getOneBest(id)
            .then(res => {
                setBest(res.data.best)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting table',
                    message: messages.createBisTableFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])
    
    const onChange = (e) => {
        e.persist()
        setBest(prevBest => {
            const [table, item, name] = e.target.name.split('.')
            let updatedValue = e.target.value

            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            return {
                ...prevBest,
                [table]: {
                  ...prevBest[table],
                  [item]: {
                    ...prevBest[table][item],
                    [name]: updatedValue
                  }
                }
              };
        })
    }

    function onSubmit(e) {
        e.preventDefault()
        updateBest(user, best)
            .then(() => {
                msgAlert({
                    heading: 'Updated',
                    message: messages.editBisTableSuccess,
                    variant: 'success'
                })
            })
            .then(() => navigate(`/bests/${best._id}`))
    }

    if (error) {
        return <p>Error!</p>
    }
    if (!best) {
        return <p>Loading...</p>
    }

    return (
        <Container>
            <h2>Edit gearsets</h2>
            <BestForm
                table={best.currentGear}
                handleSubmit={onSubmit}
                handleChange={onChange}
                gearset={'currentGear'}
            />
        </Container>
    )
}