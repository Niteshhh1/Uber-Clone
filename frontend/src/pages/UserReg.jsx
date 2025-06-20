
import  { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from "../context/UserContext";
 

function UserReg() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
   
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const {user, setUser} = useContext(UserDataContext);

  async function submitHandler(e)
  {
        e.preventDefault();
        const newUser = {
          fullname:{
            firstname:firstname,
            lastname:lastname
          },
          email : email,
          password : password
        }
      
      const response = await axios.post("http://localhost:3000/users/register", newUser);; 
      console.log(response.data);
      
      if(response.status === 201)
      {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
        setEmail('');
        setFirstname('');
        setLastname('');
        setPassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
    <img className="w-16 mb-10 rounded"  src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"/>
    <form onSubmit={(e)=>submitHandler(e)}>
        <h3 className="mb-2 text-lg font-medium">Enter Your Name</h3>
        <div className="flex mb-5 gap-3">
          <input 
            required 
            type="text" 
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            placeholder="First Name" 
            className="bg-[#eeeeee]  w-1/2 rounded border-2xl text-lg px-4 py-2  placeholder:text-base"
          />
          <input 
            required 
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            type="text" 
            placeholder="Last Name" 
            className="bg-[#eeeeee]  w-1/2 rounded border-2xl text-lg px-4 py-2 placeholder:text-base"
          />
        </div>
        <h3 className="mb-2 text-lg font-medium">Enter Your Email</h3>
        <input 
          required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email" 
          placeholder="email@example.com" 
          className="bg-[#eeeeee] mb-5 rounded border-2xl text-lg px-4 py-2 w-full placeholder:text-base"
        />
        <h3 className="mb-2 text-lg font-medium">Enter Your Password</h3>
        <input 
          required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password" 
          placeholder="enter your password" 
          className="bg-[#eeeeee] mb-5 rounded border-2xl text-lg px-4 py-2 w-full placeholder:text-base"
        />
        <button className="bg-[#111] text-white mt-8 mb-5 rounded border-2xl text-lg px-4 py-2 w-full">Create Account</button>
        <p className="text-center mb-1">Already Have Account? <Link to='/user-login' className="text-red-800">Login Here</Link></p>
    </form>
    </div>
    <div>
         <p className="ml-2 text-sm">It is a App which provide you safely authantication</p>
     </div>
</div>
  )
}

export default UserReg