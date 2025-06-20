/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


function FinishRide(props) {
    return (
        <div className="h-screen" >
        <h3 className="mt-20 ml-2 font-medium text-2xl">Finish This Ride</h3>
        <div className="mt-5 flex bg-yellow-300 p-4 rounded-md justify-between items-center">
            <div className="flex gap-2">
                <img className="h-10 w-10 rounded-full" src="https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg" alt="" />
                <h3 className="font-semibold mt-1 text-xl">Nitesh Patel</h3>
            </div>
            <div>
                <h4 className="font-semibold text-lg">2.3 Km</h4>
            </div>
        </div>
        <div onClick={()=>props.setfinishRide(false)} className="flex flex-col justify-between items-center">
          <div className="w-full mb-2 mt-2 text-md font-semibold">
              <div className="border-b-2  p-4">
                <h3>Indore Road Chapda</h3>
                Indore (M.P.)
              </div>
              <div className="border-b-2 p-4">
                <h3>Indore Road Chapda</h3>
                Indore (M.P.)
              </div>
              <div className=" p-4">
                 <h3>$199</h3>
                 Cash ON Delivery
              </div>
          </div>
          <div className="w-full flex justify-center">    
            <Link to='/captain/home' className="w-full mt-4 flex items-center justify-center rounded bg-green-600 m-2 border border-black p-1 text-xl">Confirm</Link>
          </div>
        </div>
      </div>
      )
}

export default FinishRide