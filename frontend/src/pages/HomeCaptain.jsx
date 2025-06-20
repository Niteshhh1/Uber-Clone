import { Link } from "react-router-dom"
import CaptainDetails from "../components/CaptainDetails"
import RidePopUp from "../components/RidePopUp"
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ConfirmRidePop from "../components/ConfirmRidePop";

function HomeCaptain() {

  const [ridePopUpPanel, setridePopUpPanel] = useState(true);
  const [confirmRidePop, setconfirmRidePop] = useState(false)
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopRef = useRef(null);

    useGSAP(function(){
      if(ridePopUpPanel)
      {
       gsap.to(ridePopUpPanelRef.current,{
         transform: 'translateY(0)'
        })
      }
      else
      {
       gsap.to(ridePopUpPanelRef.current,{
         transform: 'translateY(100%)'
        })
      }
    },[ridePopUpPanel])
    
    useGSAP(function(){
      if(confirmRidePop)
      {
       gsap.to(confirmRidePopRef.current,{
         transform: 'translateY(0)'
        })
      }
      else
      {
       gsap.to(confirmRidePopRef.current,{
         transform: 'translateY(100%)'
        })
      }
    },[confirmRidePop])
    
  return (
    <div className="h-screen">
      <Link to="/captain/home" className="absolute right-4 bg-black text-white rounded w-14 flex justify-center top-10">Home</Link>
      <img className="bg-white rounded absolute w-16 ml-5 mt-3" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt=""/>
      <div className="">
        <img  className="object-cover" src="https://www.researchgate.net/publication/347977917/figure/fig1/AS:974070116012033@1609247821367/Map-showing-location-of-selected-sites-of-Indore-city-Google-satellite-images.png"/>
      </div>
      <div className="p-4 mt-4">
        <CaptainDetails/>
      </div>
      <div ref={ridePopUpPanelRef}  className="bottom-0 gap-2 flex translate-y-full flex-col w-full z-10 bg-white fixed p-3">
         <RidePopUp setridePopUpPanel={setridePopUpPanel} setconfirmRidePop={setconfirmRidePop}/>
       </div>
       <div ref={confirmRidePopRef} className="bottom-0 gap-2 flex translate-y-full flex-col w-full z-10 bg-white fixed p-3 top-1">
         <ConfirmRidePop setconfirmRidePop={setconfirmRidePop} setridePopUpPanel={setridePopUpPanel}/>
       </div>
    </div>
  )
}

export default HomeCaptain