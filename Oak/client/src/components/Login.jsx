import React,{useState} from "react";
import {Link, Navigate} from 'react-router';
import { SiLoop } from "react-icons/si";
import axios from 'axios';

const Login = () => {
    const [islogin,setLogin]=useState({
        email:'',
        password:''
    });
    const [logged,setLogged]=useState(false);

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setLogin((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };

    const submitHandler=async(e)=>{
        e.preventDefault()
        try{
            const response= await axios.post('http://localhost:1000/auth/login',islogin);
            const { token,user} = response.data; 
            setLogin({  email:'',  password:'' })
            setLogged(true);
            if (token) {
              localStorage.setItem("token", token); 
              localStorage.setItem("userId",user)
              console.log(user,token)
            } else {
              alert("Login failed: Token not received");
            }
        }catch(err){
            console.log(err.message)
        }
    }

    if(logged){
        return <Navigate to='/'/>
    }

  return (
    <div className="flex items-center justify-center h-screen gap-16 relative bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-8">
       <SiLoop className="w-20 h-20 text-orange-500 mt-5 ml-0" />
        <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Oak-Media
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>

          <div className="flex flex-col">
            <label className="text-gray-700">Email</label>
            <input
                name="email"
              type="email" value={islogin.email} 
              placeholder="Enter email" onChange={handlerChange}
              className="p-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700">Password</label>
            <input
                name="password"
              type="password" value={islogin.password}
              placeholder="Enter password" onChange={handlerChange}
              className="p-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            LogIn
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to='/sign'>
            <a  className="text-orange-500 hover:underline">
              Sign In
            </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
