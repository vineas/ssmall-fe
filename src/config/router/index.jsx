import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from '../../pages/Main'
import Product from '../../pages/Product'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace='true' />} />
        <Route path="/home" element={<Main />} />
        <Route path="/product" element={<Product/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default index