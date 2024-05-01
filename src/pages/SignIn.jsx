import React from 'react'
import { useState } from 'react';
import copdImage from '../assets/copd_aunty.jpg';
import { Link } from "react-router-dom";



const Signin = () => {

  const [user,SetUser]=useState(
    {
      email:"",
      password:""
    }
  )

  let name,value;

  const handleInputs = (e) => {
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    SetUser({...user,[name]:value})

  }


  return (
    <div>
      <div className="flex h-fit w-screen">
        <div className="flex w-7/12 h-5/6 object-contain px-2 ">
          <img src={copdImage} alt="COPD Testing Device" className='w-full rounded-3xl '/>
        </div>
        <div className="w-5/12 flex justify-center items-center">
          <div className="flex flex-col gap-10 p-5 h-4/5 w-full">
            <div className='flex justify-center items-center px-10 w-full'>
                <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 rounded-lg py-2 px-4 pl-20 text-xl  text-center inline-flex items-center me-2 mb-2 w-2/3">
                    <svg className="h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193
                        2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 
                        1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                    </svg>
                    Sign in with Google
                </button>
            </div>
            <hr />
            <div className='flex flex-col gap-2 px-4'>
                <h2 className="flex justify-center text-3xl font-bold mb-4">Sign In</h2>
                <form className="flex flex-col space-y-4">
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} className="border text-black rounded-xl mx-20 py-2 px-4 " />
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputs} className="border text-black rounded-xl mx-20 py-2 px-4" />
                <span className='text-sm px-20'>Don&apos;t have an account? <Link to="/register" className='hover:text-blue-300'> Register here </Link></span>
                <button type="submit" className="bg-blue-500 text-white rounded-xl mx-20 py-2 px-4 hover:bg-blue-600">
                    Sign In
                </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Signin
