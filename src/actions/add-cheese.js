import { BASE_URL } from '../config'

export const addCheese = data => dispatch => {
  return fetch(`$BASE_URL}cheeses`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}
