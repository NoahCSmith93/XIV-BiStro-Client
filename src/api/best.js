import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllBests = () => {
    return axios(`${apiUrl}/bests`)
}

// READ -> Show

// CREATE -> Add a table

// UPDATE -> Change table title or an item

// DELETE -> Delete a table