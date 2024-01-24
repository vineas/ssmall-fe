import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ModalDelete = ({product_id}) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`https://ssmall-be.vercel.app/products/${product_id}`)
            .then(() => {
                alert("Product Deleted")
                window.location.reload()
            })
            .catch((err) => {
                alert(err);
            })
    }

    return (
        <>
            <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Delete
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <form onSubmit={handleSubmit}>
                                <div className="relative p-6 flex-auto">
                                    <h3>Are you sure delete this product?</h3>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        No
                                    </button>
                                    <button
                                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Yes
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default ModalDelete