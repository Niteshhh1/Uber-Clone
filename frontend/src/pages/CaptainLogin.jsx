import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";


 function CaptainLogin() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const {captain, setCaptain} = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
       e.preventDefault();
       const captainData ={
           email:email,
           password:password
       }
       
       const response = await axios.post('http://localhost:3000/captains/login',captainData);
      
       if(response.status===200)
       {
         const data = response.data;
         setCaptain(data.captain);
         localStorage.setItem('token', data.token);
         navigate('/captain/home');
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
           <p className="text-center mb-1">New Here ? <Link to='/captain-reg' className="text-red-800">Register as a Captain</Link></p>
       </form>
       </div>
       <div>
           <Link
            to='/user-login'
            className="bg-orange-600 flex justify-center items-center text-white mb-5 rounded border-2xl text-lg px-4 py-2 w-full ">Sign In as User</Link>
       </div>
   </div>
 )
}

export default CaptainLogin