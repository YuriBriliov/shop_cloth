import { combineReducers } from 'redux'
import { reducerCart } from './reducerCart'
import { reducerCarts } from './reducerCarts'

export const rootReducer = combineReducers({
  cart: reducerCart,
  carts: reducerCarts
})
