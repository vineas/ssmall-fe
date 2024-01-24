import React from 'react'
import Navbar from '../components/Navbar'
import CreateProduct from '../components/CreateProduct'
import TableProduct from '../components/TableProduct'

const Product = () => {
  return (
    <div>
      <Navbar />
      <CreateProduct />
      <TableProduct />
    </div>

  )
}

export default Product