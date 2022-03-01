import React from 'react'
import ProductList from './ProductList'

const Home = () =>{
  return(
    <div className='hero'>
      <div className="card bg-dark text-dark border-0">
        <img src="/assets/bg.jpeg" className="card-img" alt="..." height="300px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className='container'>
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON SALE!</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  )
}

export default Home
