import BestsIndex from './bests/BestsIndex'
import { Container } from 'react-bootstrap'

const Home = (props) => {
	const { msgAlert, user } = props

	return (
		<Container>
			<h2>All of your BiS tables:</h2>
			<BestsIndex msgAlert={msgAlert}/>
		</Container>
	)
}

export default Home
