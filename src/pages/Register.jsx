import { useState } from "react";
import copd_signup from "../assets/copd_patient.jpg"
import { Link } from "react-router-dom"; 


const Register = () => {

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })

    let name,value;

    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }


    return (
        <div className="flex w-screen h-fit">
            <div className="flex h-full w-7/12 px-2">
                <img src={copd_signup} alt="signup" className="rounded-3xl w-full"/> 
            </div>
            <div className="w-5/12 flex flex-col px-5 py-20 gap-10 items-center justify-center h-4/5">
                <h1 className="text-4xl flex font-bold">Register</h1>
                <form className="register flex flex-col w-2/3 items-center space-y-4">
                    <input type="name" name="name" value={user.name} placeholder="Name" onChange={handleInputs} className="text-black flex px-3 py-2 rounded-xl w-full"/> 
                    <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleInputs} className="text-black flex px-3 py-2 rounded-xl w-full"/>
                    <input type="password" name="password" value={user.password} onChange={handleInputs} placeholder="Password" className="text-black flex px-3 py-2 rounded-xl w-full"/>
                    <span className="text-sm px-20 w-full mr-36">Already Registered? <Link to="/signin" className="hover:text-blue-300"> Login Here </Link></span>
                    <button type="submit" className="bg-blue-500 text-white rounded-xl py-2 px-5 hover:bg-blue-600 w-full"> Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Register;