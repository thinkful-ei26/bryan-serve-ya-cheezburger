import { BASE_URL } from '../config'

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
})

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS'
export const fetchCheesesSuccess = (cheeses) => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses // pass in value with the action
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR'
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESES_ERROR,
  error
})


export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest())
  return fetch(`${BASE_URL}cheeses`)
    .then(res => res.json())
    .then(data => dispatch(fetchCheesesSuccess(data))) 
    .catch(error => dispatch(fetchCheesesError(error)))
}
