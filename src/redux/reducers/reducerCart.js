import { ADD_CART, DELETE_CART } from '../types'

export const reducerCart = (state = [], action) =>{
  const {type, payload} = action

  switch (type) {
    case ADD_CART: {
      const { data } = payload
      return [ data ]
    }

    case DELETE_CART: {
      const { data } = payload
      const result = state.filter((item)=>{
        return item.id !== data
      })
      return result
    }
    
    default: {
      return state
    }
  }
}
