import BestsIndex from './bests/BestsIndex'
import { Container } from 'react-bootstrap'

const Home = (props) => {
	const { msgAlert, user } = props

	return (
		<Container>
			{user ?
			<>
			<h2>All of your BiS tables:</h2>
			<BestsIndex user={user} msgAlert={msgAlert}/>
			</>
			:
			<>
			<h2>Home Page</h2>
			<h3>Log in to get started!</h3>
			</>
			}
		</Container>
	)
}

export default Home
