// import { Link } from "react-router-dom"

import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

function HomeLand() {

  const [pickUp, setpickUp] = useState('');
  const [destination, setdestination] = useState('');
  const [panelOpen, setpanelOpen] = useState(false)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmRidePanel, setconfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [WaitForDriver, setWaitForDriver] = useState(false)

  const confirmRideRef = useRef();
  const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null);
  const panelOpacity = useRef(null)
  const vehicleFoundRef = useRef();
  const WaitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
     e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen)
    {
        gsap.to(panelRef.current,{
          height:'90%'
        })
        gsap.to(panelOpacity.current,{
          opacity:1
        })
    }
    else
    {
       gsap.to(panelRef.current,{
         height:'0%'
       })
       gsap.to(panelOpacity.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
     if(vehiclePanel)
     {
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)'
       })
     }
     else
     {
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)'
       })
     }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel)
    {
     gsap.to(confirmRideRef.current,{
       transform: 'translateY(0)'
      })
    }
    else
    {
     gsap.to(confirmRideRef.current,{
       transform: 'translateY(100%)'
      })
    }
 },[confirmRidePanel])

 useGSAP(function(){
  if(vehicleFound)
  {
   gsap.to(vehicleFoundRef.current,{
     transform: 'translateY(0)'
    })
  }
  else
  {
   gsap.to(vehicleFoundRef.current,{
     transform: 'translateY(100%)'
    })
  }
},[vehicleFound])

useGSAP(function(){
  if(WaitForDriver)
  {
   gsap.to(WaitingForDriverRef.current,{
     transform: 'translateY(0)'
    })
  }
  else
  {
   gsap.to(WaitingForDriverRef.current,{
     transform: 'translateY(100%)'
    })
  }
},[WaitForDriver])

  return (
    <div  className="h-screen relative overflow-hidden">
       <img className="bg-white rounded absolute w-16 ml-5 mt-3" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt=""/>
       <div className="">
         <img  className="w-full h-full object-cover" src="https://www.researchgate.net/publication/347977917/figure/fig1/AS:974070116012033@1609247821367/Map-showing-location-of-selected-sites-of-Indore-city-Google-satellite-images.png"/>
       </div>
       <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
          <div className="h-[40%] p-5  bg-white relative">
              <h4 ref={panelOpacity} onClick={()=>setpanelOpen(false)} className="absolute top-3 right-3">Down</h4>
              <h4 className="font-bold text-2xl flex">Find a Trip</h4>
              <form onSubmit={(e)=>submitHandler(e)} className="">
                <input 
                  value={pickUp}
                  onClick={()=>setpanelOpen(true)}
                  onChange={(e)=>setpickUp(e.target.value)}
                  className="border bg-[#eee] px-12 w-full mt-5 py-2 rounded-xl border-black " 
                  type="text"
                  placeholder="Add a Pick Location" 
                />
                <input 
                  value={destination}
                  onChange={(e)=>setdestination(e.target.value)}
                  className="border bg-[#eee] px-12 w-full mt-5 py-2 rounded-xl border-black " 
                  type="text" 
                  placeholder="Enter your Destination" 
                />
              </form>
          </div>
          <div ref={panelRef} className="bg-white h-0">
             <LocationSearchPanel setpanelOpen={setpanelOpen} vehiclePanel={vehiclePanel} setvehiclePanel={setvehiclePanel} />
          </div>
       </div>
       <div ref={vehiclePanelRef} onClick={()=>{setvehiclePanel(false)}} className="bottom-0 gap-2 flex translate-y-full flex-col w-full z-10 bg-white fixed p-3">
          <VehiclePanel setconfirmRidePanel={setconfirmRidePanel}/>
       </div>
       <div ref={confirmRideRef}  className="bottom-0 gap-2 flex translate-y-full flex-col w-full z-10 bg-white fixed p-3">
          <ConfirmRide setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound}/>
       </div>
       <div ref={vehicleFoundRef} className="bottom-0 gap-2 flex translate-y-full flex-col w-full z-10 bg-white fixed p-3">
           <LookingForDriver setconfirmRidePanel={setconfirmRidePanel}/>
       </div>
       <div ref={WaitingForDriverRef} className="bottom-0 gap-2 flex  flex-col w-full z-10 bg-white fixed p-3">
           <WaitingForDriver setWaitForDriver={setWaitForDriver}/>
       </div>
    </div>
  )
}

export default HomeLand