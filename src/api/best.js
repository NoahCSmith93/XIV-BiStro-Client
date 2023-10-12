import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllBests = (user) => {
    return axios({
		url: apiUrl + '/api/bests',
		method: 'GET',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// READ -> Show
export const getOneBest = (id) => {
	console.log("This is the id", id)
    return axios({
		url: apiUrl + '/api/bests/' + id,
		method: 'GET',
	})
}

// CREATE -> Add a table

// UPDATE -> Change table title or an item

// DELETE -> Delete a table