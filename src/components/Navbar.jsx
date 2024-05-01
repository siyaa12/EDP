/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link, } from "react-router-dom";


const Navbar = () => {
    const [curPage,setCurPage]=useState("Home");

  return (
        <nav className=" bg-gray-800 border-gray-700 my-4 h-1/8">
            <div className= 'flex p-3 justify-between w-screen'>
                <Link to="/" className="flex flex-row reverse  items-center space-x-3">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">COPD DETECTOR</span>
                </Link> 
                <div className="w-full flex justify-end " >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800  dark:border-gray-700">
                        <li>
                        <Link to="/" className={(curPage==="Home"?'text-blue-500':'text-white') +" block py-2 px-3 rounded bg-transparent"}  onClick={()=>{setCurPage("Home")}}>Home</Link>                    </li>
                        <li>
                        <Link to="/about"  className={(curPage==="About"?'text-blue-500':'text-white') +" block py-2 px-3 rounded bg-transparent"} onClick={()=>{setCurPage("About");console.log(curPage)}}>About</Link>
                        </li>
                        <li>
                        <Link to="/services" className={(curPage==="Services"?'text-blue-500':'text-white') +" block py-2 px-3 rounded bg-transparent"} onClick={()=>{setCurPage("Services")}}>Services</Link>
                        </li>
                        <li>
                        <Link to="/contact" className={(curPage==="Contact"?'text-blue-500':'text-white') +" block py-2 px-3 rounded bg-transparent"} onClick={()=>{setCurPage("Contact")}}>Contact</Link>
                        </li>
                        <li>
                        <Link to="/signin" className={(curPage==="Auth"?'text-blue-500':'text-white') +" block py-2 px-3 rounded bg-transparent"} onClick={()=>{setCurPage("Auth")}}>Sign In / Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
