import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

function CaptainRiding() {

  const [finishRide, setfinishRide] = useState(false)
  const finishRideRef = useRef(null);
  
  useGSAP(function(){
    if(finishRide)
    {
     gsap.to(finishRideRef.current,{
       transform: 'translateY(0)'
      })
    }
    else
    {
     gsap.to(finishRideRef.current,{
       transform: 'translateY(100%)'
      })
    }
  },[finishRide])
  
  return (
    <div className="h-screen">
      <div>
        <Link to="/captain/home" className="absolute right-4 bg-black text-white rounded w-14 flex justify-center top-10">Home</Link>
        <img className="bg-white rounded absolute w-16 ml-5 mt-3" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt=""/>    
      </div>
      <div >
        <img  className="object-cover" src="https://www.researchgate.net/publication/347977917/figure/fig1/AS:974070116012033@1609247821367/Map-showing-location-of-selected-sites-of-Indore-city-Google-satellite-images.png"/>
      </div>
      <div onClick={()=>setfinishRide(true)} className="p-2 h-1/5  flex flex-col items-center gap-5 mt-12">
        <h4 className="text-xl">5 KM away</h4>
        <button className="border h-12  bg-green-500 w-32 rounded text-black">Complete Ride</button>
      </div>
      <div ref={finishRideRef} className="bottom-0 gap-2 flex translate-y-full flex-col w-full z-10 bg-white fixed p-3 top-1">
          <FinishRide setfinishRide={setfinishRide}/>
       </div>
    </div>
  )
}

export default CaptainRiding