import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/UserContext";
import axios from "axios";


function UserLogin() {

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
  //  const [userData,setUserData] = useState({});
   
   // eslint-disable-next-line no-unused-vars
   const {user, setUser} = useContext(UserDataContext);
   
   const navigate = useNavigate();

   const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email:email,
            password:password
        }
        
        const response = await axios.post("http://localhost:3000/users/login", userData)

        if(response.status === 200)
        {
           const data = response.data;
           setUser(data.user);
           localStorage.setItem('token', data.token);
           navigate('/home');
        }
        setEmail('');
        setPassword('');
   }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className="w-16 mb-10 rounded"  src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"/>
        <form onSubmit={(e)=>submitHandler(e)}>
            <h3 className="mb-2 text-lg font-medium">Enter Your Email</h3>
            <input 
              required 
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              type="email" 
              placeholder="email@example.com" 
              className="bg-[#eeeeee] mb-7 rounded border-2xl text-lg px-4 py-2 w-full placeholder:text-base"
            />
            <h3 className="mb-2 text-lg font-medium">Enter Your Password</h3>
            <input 
              required 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              type="password" 
              placeholder="enter your password" 
              className="bg-[#eeeeee] mb-7 rounded border-2xl text-lg px-4 py-2 w-full placeholder:text-base"
            />
            <button className="bg-[#111] text-white mb-5 rounded border-2xl text-lg px-4 py-2 w-full">Continue</button>
            <p className="text-center mb-1">New Here ? <Link to='/user-reg' className="text-red-800">Create New Account</Link></p>
        </form>
        </div>
        <div>
            <Link
             to='/captain-login'
             className="bg-green-600 flex justify-center items-center text-white mb-5 rounded border-2xl text-lg px-4 py-2 w-full ">Sign In as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin