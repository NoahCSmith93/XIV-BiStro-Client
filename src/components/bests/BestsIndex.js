import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// api function
import { getAllBests } from '../../api/best'
// messages
import messages from '../shared/AutoDismissAlert/messages'

const BestsIndex = (props) => {
const [bests, setBests] = useState(null)
const [error, setError] = useState(false)
const { msgAlert } = props

useEffect(() => {
    getAllBests()
        .then(res => {
            console.log('res.data', res.data)
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

    return (
        <div className='container-md'>
            <h1>Bests Index</h1>
        </div>
    )
}

export default BestsIndex