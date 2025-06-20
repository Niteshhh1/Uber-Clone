import axios from "axios";
import {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";


function CaptainReg() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [type, setType] = useState('');

  // eslint-disable-next-line no-unused-vars
  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  async function submitHandler(e)
  {
        e.preventDefault();
        const captainData =  {
          fullname:{
            firstname:firstname,
            lastname:lastname
          },
          email : email,
          password : password,
          vehicle:{
            color:color,
            plate:plate,
            capacity:capacity,
            vehicleType:type
          }
        }
        console.log(captainData);
        
        const response = await axios.post('http://localhost:3000/captains/register',captainData);
        console.log(response);
        if(response.status===201)
        {
          const data = response.data;
          setCaptain(data.captain);
          localStorage.setItem('token', data.token);
          navigate('/captain/home');
        } 

        setEmail('');
        setFirstname('');
        setLastname('');
        setPassword('');
        setColor('');
        setCapacity('');
        setPlate('');
        setType('');
  }
  return (
    <div className="p-5 h-screen flex flex-col justify-between">
    <div>
    <img className="w-16 mb-3 rounded"  src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"/>
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
        <h3 className="mb-2 text-lg font-medium">Enter Vehicle Info</h3>
        <div className="flex mb-5 gap-3">
          <input 
            required 
            type="text" 
            value={color}
            onChange={(e)=>setColor(e.target.value)}
            placeholder="Enter Color" 
            className="bg-[#eeeeee]  w-1/2 rounded border-2xl text-lg px-4 py-2  placeholder:text-base"
          />
          <input 
            required 
            value={plate}
            onChange={(e)=>setPlate(e.target.value)}
            type="number" 
            placeholder="Enter Number" 
            className="bg-[#eeeeee]  w-1/2 rounded border-2xl text-lg px-4 py-2 placeholder:text-base"
          />
        </div>
        <div className="flex mb-5 gap-3">
          <input 
            required 
            type="number" 
            value={capacity}
            onChange={(e)=>setCapacity(e.target.value)}
            placeholder="Enter Capacity" 
            className="bg-[#eeeeee]  w-1/2 rounded border-2xl text-lg px-4 py-2  placeholder:text-base"
          />
          <input 
            required 
            value={type}
            onChange={(e)=>setType(e.target.value)}
            type="text" 
            placeholder="Enter Type" 
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
        <button className="bg-[#111] text-white mt-3 mb-3 rounded border-2xl text-lg px-4 py-2 w-full">Create Account</button>
        <p className="text-center mb-1">Already Have Account? <Link to='/captain-login' className="text-red-800">Login Here</Link></p>
    </form>
    </div>
    <div>
         <p className="ml-2 text-sm">It is a App which provide you safely authantication</p>
     </div>
</div>
  )
}
export default CaptainReg