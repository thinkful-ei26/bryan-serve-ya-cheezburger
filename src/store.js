import { createStore, applyMiddleware } from 'redux'
import fetchCheeseReducer from './reducers/cheese';
import thunk from 'redux-thunk'

const store = createStore(fetchCheeseReducer, applyMiddleware(thunk))

export default store
