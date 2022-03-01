import { ADD_CART, DELETE_CART, ALL_PRODUCTS } from "../types"

const allItems = (data)=>{
  return {
    type: ALL_PRODUCTS,
    payload: data
  }
}

const addCart = (data) =>{
  return{
    type: ADD_CART,
    payload: {data}
  }
}

const deleteCart = (data) =>{
  return{
    type: DELETE_CART,
    payload: { data }
  }
}

export const allCarts = (carts) => async (dispatch) =>{
  try {
    // console.log(data)
    dispatch(allItems(carts))
  } catch (error) {
    console.log(error)
  }
}

export const newItem = (id) => async (dispatch) =>{
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    dispatch(addCart(data))
  } catch (error) {
    console.log(error)
  }
}


export const deleteItem = (id) => async (dispatch) =>{
  try {
    dispatch(deleteCart(id))
  } catch (error) {
    console.log(error)
  }
}
