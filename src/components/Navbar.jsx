import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const logo = require('../assets/img/logo.png')
const cart = require('../assets/img/Vector.png')

const Navbar = () => {

    return (
        <div>
            <nav style={{ background: '#40BFFF' }}>
                <div className='container mx-auto'>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                </div>

                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:block mr-10">
                                    <div className="flex space-x-4">
                                        <Link to="/" className="text-white hover:bg-gray-700 hover:text-gray rounded-md px-3 py-2 text-sm font-medium">
                                            Home
                                        </Link>
                                        <Link to="/product" className="text-white hover:bg-gray-700 hover:text-gray rounded-md px-3 py-2 text-sm font-medium">
                                            Product
                                        </Link>
                                        <a
                                            href="#"
                                            className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                        >
                                            About
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                        >
                                            Pricing
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto p-1"
                                        src={cart}
                                        alt="Your Company"
                                    />
                                </div>
                                {/* Profile dropdown */}
                                <div className="relative ml-3">
                                    <div>
                                        <button
                                            type="button"
                                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            id="user-menu-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar