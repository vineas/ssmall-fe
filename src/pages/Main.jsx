import React from 'react'
import Navbar from '../components/Navbar'
import CardProduct from '../components/CardProduct'
import CardTop from '../components/CardTop'

const Main = () => {
    return (
        <div>
            <Navbar />
            <CardTop />
            <CardProduct />
        </div>
    )
}

export default Main