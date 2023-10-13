import { useState } from 'react'
import messages from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import BestForm from '../shared/BestForm'
import { createBest } from '../../api/best'
import { Container, Form, Row } from 'react-bootstrap'
import blankBest from '../../BlankBest'

export default function BestCreate({ user, msgAlert }) {
    const [best, setBest] = useState(blankBest)
    const navigate = useNavigate()

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

    function titleChange(e) {
        e.persist()
        setBest(prevBest => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            const updatedBest = { [updatedName] : updatedValue }
            return {
                ...prevBest, ...updatedBest
            }
        })
    }

    function onSubmit(e) {
        e.preventDefault()
        createBest(user, best)
            .then((newBest) => {
                msgAlert({
                    heading: 'Created',
                    message: 'New table created successfully!',
                    variant: 'success'
                })
                return newBest
            })
            .then((newBest) => navigate(`/bests/${newBest._id}`))
    }

    return (
        <Container>
            <Row>
            <h2>New gearsets</h2>
            </Row>
            <Row>
                <Form onSubmit={onSubmit}>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control
                        name='title'
                        onChange={titleChange}
                        value={best.title}
                    />
                </Form>
            </Row>
            <BestForm
                table={best.currentGear}
                handleSubmit={onSubmit}
                handleChange={onChange}
                gearset={'currentGear'}
            />
            <BestForm
                table={best.bestGear}
                handleSubmit={onSubmit}
                handleChange={onChange}
                gearset={'bestGear'}
            />
        </Container>
    )
}