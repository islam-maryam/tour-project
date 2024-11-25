

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu';
import Home from './AdminHome/Home';
import Tours from './Tours/Tours';
import Users from './Users/Users';
import CreateForm from './Tours/CreateForm';
import Orders from './Orders/Orders';

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(true); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex min-h-[100vh]">
            <div
                className={`bg-gray-800 text-white transition-transform duration-300 ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                } min-w-[250px] w-[20%] fixed top-0 bottom-0 z-10`}
            >
                <Menu />
            </div>

            <div
                className={`flex-1 bg-gray-300 ml-0 transition-all duration-300 ${
                    menuOpen ? 'ml-[250px]' : 'ml-0'
                }`}
            >
                <div className="h-[70px] bg-gray-900 border-b border-neutral-700 flex justify-between items-center px-4">
                    <button
                        className="text-white text-2xl"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? '☰' : '☰'}
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white text-xl px-6 py-2 m-2 rounded-lg"
                        onClick={() => {
                            window.localStorage.removeItem('token');
                            window.location.href = 'http://localhost:3000/';
                        }}
                    >
                        Logout
                    </button>
                </div>

                <div className="m-5 border-2 border-gray-500 h-[89%] rounded-2xl p-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/all-users" element={<Users />} />
                        <Route path="/tours" element={<Tours />} />
                        <Route path="/create-tour" element={<CreateForm />} />
                        <Route path="/orders" element={<Orders />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
