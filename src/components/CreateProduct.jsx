import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CreateProduct = () => {
    let [product, setProduct] = useState({
        product_name: "",
        product_price: ""
    })
    const [product_image, setImage] = useState(null)
    const handleUpload = (e) => {
        setImage(e.target.files[0]);
    }

    let handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formData = new FormData();
            formData.append('product_name', product.product_name);
            formData.append('product_price', product.product_price);
            formData.append('product_image', product_image);
    
            await axios.post(`https://ssmall-be.vercel.app/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            alert('Product Create');
            window.location.reload();
        } catch (err) {
            alert(err);
        }
    };
    

    return (
        <div>
            <form className="mt-10 max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="product"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="product_name"
                        id="product-name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tshirt Adidas"
                        required=""
                        value={product.product_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        name="product_price"
                        id="product-price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="$199"
                        required=""
                        value={product.product_price}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="product"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Product Image
                    </label>
                    <input
                        type="file"
                        id="product-name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tshirt Adidas"
                        required=""
                        onChange={handleUpload}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateProduct