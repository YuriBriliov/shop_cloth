import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'


const Product = () =>{
  const { id } = useParams()
  const dispatch = useDispatch()

  const carts = useSelector((state)=>state.carts)

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getProdunt = async () =>{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      if(response.ok){
        setProduct(await response.json())
        setLoading(false)
      }
    }
    getProdunt()
  },[])


  const Loading = () =>{
    return(
      <>
        <div className="col-md-6">
          <Skeleton count={1} height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton count={17} height={15} />
        </div>
      </>
    )
  }

  const addItem = () =>{
    carts.forEach(item => {
      if (item.id == id) {
        console.log(item)
      }
    });
    
  }


  const ShowProduct = () =>{
    return(
      <>
        <div className="col-md-6">
          <img src={product.image} alt="img" height="400px" width="400px"/>
        </div>
        <div className="col-md-6">
          <h4 className='text-uppercase text-black-50'>
            {product.category}
          </h4>
          <h1 className='display-5'>
            {product.title}
          </h1>
          <p className='lead'>
            Rating {product.rating && product.rating.rate} 
             <i className='fa fa-star'></i>
          </p>
          <p className='lead'>
            {product.discription}
          </p>
          <h3 className='display-6 fw-bold my-4'>
            $ {product.price}
          </h3>
          <p className='lead'>
            {product.discription}
          </p>
          <button onClick={addItem} className='btn btn-outline-dark px-4 py-2'>
            Add to Cart
          </button>
          <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
            Go to Cart
          </Link>
        </div>
      </>
    )
  }

  return(
    <div>
        <div className="container py-5">
          <div className="row py-4">
            {loading ? <Loading/> : <ShowProduct />}
          </div>
        </div>
    </div>
  )
}

export default Product
