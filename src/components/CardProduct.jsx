import React, { useEffect, useState } from 'react';
import headset from '../assets/img/headset.png';
import axios from 'axios';

const CardProduct = () => {

    let [products, setProduct] = useState([])
    useEffect(() => {
        axios.get(`https://ssmall-be.vercel.app/products`)
            .then((res) => {
                setProduct(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <div className='container mx-auto mt-10 mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>

                {products.map((product, index) => (
                    <div key={index} className='rounded-lg shadow-lg shadow-indigo-500/40'>
                        <img
                            className='rounded-t-lg w-full h-48 object-cover'
                            src={product.product_image}
                            alt='Product Image'
                        />
                        <h2 className='px-4 mt-2 text-lg'>{product.product_name || 'Product Name'}</h2>
                        <p className='px-4 mb-2 text-xs text-gray-400'>4.5/5</p>
                        <div className='px-4'>
                            <h3 className='font text-2xl mb-2'>{`$${product.product_price || 'Product Price'}`}</h3>
                        </div>
                        <div className='px-4 pb-4'>
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 font-small rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default CardProduct;
