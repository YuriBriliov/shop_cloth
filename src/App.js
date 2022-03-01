import './App.css'
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import Product from './components/Product'
import { Routes, Route } from 'react-router-dom'

function App() {


  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product />}/>
        {/* <Route path="/" element={<Home />}/> */}
      </Routes>
    </>
  );
}

export default App;
