import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// api function
import { getAllBests } from '../../api/best'
// messages
import messages from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const BestsIndex = (props) => {
    const [bests, setBests] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props

    useEffect(() => {
        getAllBests()
            .then(res => {
                setBests(res.data.bests)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting tables',
                    message: messages.indexBisTablesFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    // Data state handling branches
    if (error) {
        return <p>Error!</p>
    }
    if (!bests) {
        return <p>Loading tables...</p>
    } else if (bests.length === 0) {
        return <p>You don't have any tables yet!</p>
    }

    const bestCards = bests.map(best => (
        <Card key={best.id} style={{width: '30%', margin: 5}}>
            <Card.Header>{best.title}</Card.Header>
            <Card.Body>Nothing yet</Card.Body>
        </Card>
    ))

    return (
        <div className='container-md' style={ cardContainerLayout }>
            {bestCards}
        </div>
    )
}

export default BestsIndex