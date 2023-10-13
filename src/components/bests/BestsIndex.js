import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
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

const cardButtonLayout = {
    width: '30%',
    margin: 3,
    fontSize: '12px'
}

const BestsIndex = (props) => {
    const [bests, setBests] = useState(null)
    const [error, setError] = useState(false)
    const { user, msgAlert } = props

    useEffect(() => {
        getAllBests(user)
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
        <Card key={best._id} style={{width: '35%', margin: 5}}>
            <Card.Header>{best.title}</Card.Header>
            <Card.Body>
                <Link to={`/bests/${best._id}`}>
                    <Button style={ cardButtonLayout } variant='primary'>
                        View
                    </Button>
                </Link>
                {/* <Link to={`/bests/${best._id}/edit`}>
                    <Button style={ cardButtonLayout } variant='warning'>
                        Edit
                    </Button>
                </Link>
                <Link to={`/bests/${best._id}/delete`}>
                    <Button style={ cardButtonLayout } variant='danger'>
                        Delete
                    </Button>
                </Link> */}
            </Card.Body>
        </Card>
    ))

    return (
        <div className='container-md' style={ cardContainerLayout }>
            {bestCards}
        </div>
    )
}

export default BestsIndex