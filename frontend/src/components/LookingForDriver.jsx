/* eslint-disable react/prop-types */


function LookingForDriver(props) {
  return (
    <div onClick={()=>props.setconfirmRidePanel()}>
    <h3 className="font-medium text-2xl">Looking for a Drivers</h3>
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
    </div>
  </div>
  )
}

export default LookingForDriver