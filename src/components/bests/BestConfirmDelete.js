import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import { deleteBest } from '../../api/best'
import { useNavigate } from 'react-router-dom'
import { getOneBest } from '../../api/best'
import { Button } from 'react-bootstrap'

export default function BestConfirmDelete({ user, msgAlert }) {
    const [best, setBest] = useState('')
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

    function handleDelete() {
        // make the delete call
        deleteBest(user, best._id)
            // send a success message
            .then(() =>
                msgAlert({
                    heading: `${best.title} has been deleted.`,
                    message: messages.removeBisTableSuccess,
                    variant: 'success',
                })
            )
            // navigate the user to the home page(index)
            .then(() => navigate('/'))
            // send a fail message if there is an error
            .catch(() =>
                msgAlert({
                    heading: 'Error',
                    message: messages.createBisTableFailure,
                    variant: 'danger',
                })
            )
    }

    function goBack() {
        navigate(`/bests/${best._id}`)
    }

    if (error) {
        return <p>Error!</p>
    }
    if (!best) {
        return <p>Loading...</p>
    }

    return (
        <>
        <h2>Are you sure you want to delete {best.name}?</h2>
        &nbsp;
        <Button 
            variant="danger"
            onClick={() => handleDelete()}
        >
            Yes, delete it.
        </Button>
        &nbsp;
        <Button onClick={() => goBack()}>
            No, go back!
        </Button>
        </>
    )
}