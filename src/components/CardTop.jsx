import React, { useEffect, useState } from 'react';
import headset from '../assets/img/headset-kabel.png';
import axios from 'axios';

const CardTop = () => {
    let [products, setProduct] = useState([])

    useEffect(() => {
        axios.get(`https://ssmall-be.vercel.app/products`)
            .then((res) => {
                setProduct(res.data.data);
                // console.log(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleAddCart = () => {
        axios
          .post(`https://ssmall-be.vercel.app/cart/`)
          .then(() => {
            alert("Add complete.");
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error during like:", error);
          });
      };
    
    return (
        <div className='container mx-auto mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

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
                                    <div className='px-4 pb-4'>
                                        <button
                                            type="button"
                                            onClick={handleAddCart} key={product.product_id}
                                            className="text-white bg-blue-700 hover:bg-blue-800 font-small rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default CardTop;
