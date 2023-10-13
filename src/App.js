// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import BestShow from './components/bests/BestShow'
import BestEdit from './components/bests/BestEdit'
import BestConfirmDelete from './components/bests/BestConfirmDelete'
import BestCreate from './components/bests/BestCreate'

const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	const clearUser = () => {
		setUser(null)
  	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
		)
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route
					path='/bests/:id'
					element={
						<RequireAuth user={user}>
							<BestShow msgAlert={msgAlert} />
						</RequireAuth>
					}
				/>
				<Route
					path='/bests/:id/edit'
					element={
						<RequireAuth user={user}>
							<BestEdit user={user} msgAlert={msgAlert} />
						</RequireAuth>
					}
				/>
				<Route
					path='/bests/:id/delete'
					element={
						<RequireAuth user={user}>
							<BestConfirmDelete user={user} msgAlert={msgAlert} />
						</RequireAuth>
					}
				/>
				<Route
					path='/bests/new'
					element={
						<RequireAuth user={user}>
							<BestCreate user={user} msgAlert={msgAlert} />
						</RequireAuth>
					}
				/>
				<Route 
					path='/' 
					element={<Home msgAlert={msgAlert} user={user} />} 
				/>
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
					<RequireAuth user={user}>
						<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
					</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
					<RequireAuth user={user}>
						<ChangePassword msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
