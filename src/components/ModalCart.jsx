import axios from 'axios';
import React, { useEffect, useState } from 'react'
const cart = require('../assets/img/Vector.png')
const trash = require('../assets/img/trash.png')


const ModalCart = () => {
    const [showModal, setShowModal] = React.useState(false);
    let [products, setProduct] = useState([])

    useEffect(() => {
        axios.get(`https://ssmall-be.vercel.app/cart`)
            .then((res) => {
                setProduct(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleDelete = (cart_id) => {
        axios.delete(`https://ssmall-be.vercel.app/cart/${cart_id}`)
            .then(() => {
                alert("Deleted")
            })
            .catch((err) => {
                alert(err);
            })
    }

    return (
        <div>
            <button
                className="text-white uppercase text-xs px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <img
                    className="h-5 w-auto"
                    src={cart}
                    alt="Cart"
                />
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full max-w-md bg-white outline-none focus:outline-none'>
                            {/*content*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    My Cart
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" key={cart.cart_id}>
                                {/*body*/}
                                {products.map((product, index) => (
                                    <div className='rounded-lg shadow-lg bg-white'>
                                        <div >
                                            <div className='flex'>
                                                <img
                                                    className='rounded-l-lg'
                                                    style={{ width: 173, height: 173 }}
                                                    src={product.product_image}
                                                    alt='Product Image'
                                                />
                                                <div className='inline'>
                                                    <h1 className='p-4'>{product.product_name || 'Product Name'}</h1>
                                                    <p className='px-4 mb-2 text-xs text-gray-400'>4.5/5</p>
                                                    <div className='px-4'>
                                                        <h3 className='font text-2xl mb-2'>${product.product_price || 'Product Price'}</h3>
                                                    </div>
                                                    <div className='flex'>
                                                        <div className='px-4 pb-4'>
                                                            <button
                                                                type="button"
                                                                className="text-white bg-red-700 hover:bg-red-800 font-small rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                            >
                                                                Checkout
                                                            </button>
                                                        </div>
                                                        <form onSubmit={handleDelete}>
                                                        <div className='px-4 pb-4'>
                                                            <button
                                                                type="submit"
                                                                className="text-red bg-white-700 hover:bg-white-800 font-small rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                            >
                                                                <img
                                                                    className="h-5 w-auto"
                                                                    src={trash}
                                                                    alt="Delete"
                                                                />
                                                            </button>
                                                        </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/*footer*/}
                                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default ModalCart