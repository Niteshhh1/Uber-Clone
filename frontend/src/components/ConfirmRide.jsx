/* eslint-disable react/prop-types */

function ConfirmRide(props) {
  return (
    
    <div onClick={()=>props.setconfirmRidePanel(false)}>
      <h3 className="font-medium text-2xl">Confirm Your Ride</h3>
      <div className="flex flex-col justify-between items-center">
        <img className="h-48 w-48" src="https://parkplus-bkt-img.parkplus.io/production/crawler/public/Crawler0fdc6ed433bb11efaefe938c3743fbe5_20240626182319033036.jpg" alt="" />
        <div className="w-full mb-2 text-xl font-medium">
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
        <button onClick={()=>props.setvehicleFound(true)} className="w-full bg-green-600 m-2 border border-black p-1 text-xl">Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmRide