import { ALL_PRODUCTS } from '../types'

export const reducerCarts = (state = [], action) =>{
  const {type, payload} = action

  switch (type) {

    case ALL_PRODUCTS: {
      return payload
    }
    
    default: {
      return state
    }
  }
}
