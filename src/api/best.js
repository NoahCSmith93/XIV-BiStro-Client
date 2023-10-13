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
    return axios({
		url: apiUrl + '/api/bests/' + id,
		method: 'GET',
	})
}

// CREATE -> Add a table
export const createBest = (user, best) => {
	return axios({
		url: apiUrl + '/api/bests/',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {best: best}
	})
}

// UPDATE -> Change table title or an item
export const updateBest = (user, best) => {
	return axios({
		url: apiUrl + '/api/bests/' + best._id,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {best: best}
	})
}

// DELETE -> Delete a table
export const deleteBest = (user, id) => {
	return axios({
		url: apiUrl + '/api/bests/' + id,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}