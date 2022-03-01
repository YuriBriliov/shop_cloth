import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux'
import { allCarts } from '../redux/actions/actionCart'

const ProductList = () =>{
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [filtered, setFilter] = useState(data)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getProducts = async () =>{
      const response = await fetch('https://fakestoreapi.com/products')
      if(response.ok){
        const newData = await response.json()
        setData(newData)
        setFilter(newData)
        setLoading(false)
        
      }
    }
    getProducts()
  },[])

  useEffect(()=>{
    dispatch(allCarts(data))
  },[loading])


  const setFilterCategory = (arg) =>{
    let newData = data.filter((item)=>{
      return item.category === arg
    })
    setFilter(newData)
  }

  const Loading = () =>{
    return(
      <>
        <div className="col-md-3">
          <Skeleton count={1} height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton count={1} height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton count={1} height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton count={1} height={350} />
        </div>
      </>
    )
  }

  const Products = () =>{
    return(
      <>
        <div className="buttons d-flex justify-content-center mb-3 pb-3">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilterCategory("men's clothing")}>Man's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilterCategory("women's clothing")}>Woman's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilterCategory("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilterCategory("electronics")}>Electronic</button>
        </div>
        {filtered.map((products)=>{
          return(
              <div className="col-md-3 mb-3" key={products.id}>
                <div className="card h-100 text-center p-4">
                  <img src={products.image} className="card-img-top" height="250px" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title mb-0" title={products.title}>{products.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                      ${products.price}
                    </p>
                    <Link to={`/product/${products.id}`} className="btn btn-outline-dark">Buy Now</Link>
                  </div>
                </div>
              </div>
          )
        })}
      </>
    )
  }


  return (
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Lasts Products
            </h1>
            <hr/>
          </div>
        </div>
        <div className="row justify-cintent-center">
          {loading ? <Loading /> : <Products />}
        </div>
      </div>
    </div>
  )
}

export default ProductList
