import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOneBest } from '../../api/best'
import messages from '../shared/AutoDismissAlert/messages'
import { Col, Container, Row } from 'react-bootstrap'
import BestTable from './BestTable'

export default function({ msgAlert }) {
    const [best, setBest] = useState(null)
    const [error, setError] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        getOneBest(id)
            .then(res => {
                setBest(res.data.best)
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

    useEffect(() => {
        const handleResize = () => {
          // Hide the element if the screen width is less than 600px
          setIsHidden(window.innerWidth < 1200);
        };
    
        // Initial check on component mount
        handleResize();
    
        // Listen for window resize events
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    // Data state handling branches
    if (error) {
        return <p>Error!</p>
    }
    if (!best) {
        return <p>Loading tables...</p>
    }

    return (
        <Container>
            <Row><Link to='/'>{`< Back`}</Link></Row>
            <Row>
              <Col>
                <h2>Current Gear &nbsp;
                  <Link className='btn btn-info' to={`/bests/${id}/edit`}>Edit</Link>
                  &nbsp;
                  <Link className='btn btn-danger' to={`/bests/${id}/delete`}>Delete</Link>
                </h2>
              </Col>  
              <Col>
                {!isHidden && (<h2>Best in Slot Gear &nbsp;
                  <Link className='btn btn-info' to={`/bests/${id}/edit`}>Edit</Link>
                  &nbsp;
                  <Link className='btn btn-danger' to={`/bests/${id}/delete`}>Delete</Link>
                </h2>)}
              </Col>  
            </Row>
            <Row>
              <Col>
                <BestTable table={best.currentGear} />
              </Col>
              <Col>
                {isHidden && (<h2>Best in Slot Gear &nbsp;
                  <Link className='btn btn-info' to={`/bests/${id}/edit`}>Edit</Link>
                  &nbsp;
                  <Link className='btn btn-danger' to={`/bests/${id}/delete`}>Delete</Link>
                </h2>)}
                <BestTable table={best.bestGear} />
              </Col>
            </Row>

        </Container>
    )
}