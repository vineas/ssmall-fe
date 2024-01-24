import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ModalUpdate from './ModalUpdate'
import ModalDelete from './ModalDelete'

const TableProduct = () => {
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
        <div className='container mx-auto mt-10 pb-10'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {products.map((product, index) => (
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {product.product_name || 'Product Name'}
                                </th>
                                <td className="px-6 py-4">${product.product_price || 'Product Price'}</td>
                                <td className="px-6 py-4">
                                    <img
                                        className='object-cover w-24 h-24'
                                        src={product.product_image}
                                        alt='Product Image'
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <ModalUpdate product_id={product.product_id} product_name={product.product_name} product_price={product.product_price}/>
                                    <ModalDelete product_id={product.product_id} />
                                </td>
                            </tr>

                        </tbody>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default TableProduct