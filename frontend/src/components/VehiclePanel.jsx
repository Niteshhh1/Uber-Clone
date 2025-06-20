/* eslint-disable react/prop-types */


function VehiclePanel(props) {
  return (
    <div> 
    <h3 className="ml-5 font-bold text-xl mb-1">Choose a Vehicle</h3>
    <div onClick={()=>props.setconfirmRidePanel(true)} className="flex border-2 active:border-black rounded-xl ml-2 mr-2 justify-between  items-center">
       <img className="h-20 w-24" src="https://parkplus-bkt-img.parkplus.io/production/crawler/public/Crawler0fdc6ed433bb11efaefe938c3743fbe5_20240626182319033036.jpg" alt="" />
       <div  className="h-1/2">
          <h4 className="font-semibold text-sm">UberGo 4</h4>
          <h4 className="font-semibold text-sm">2 mins away</h4>
          <p className=" text-xs"> Affordable, compact rides</p>
       </div>
       <h2 className="font-medium mr-3 text-lg mb-6">$193.20</h2>
    </div>
    <div onClick={()=>props.setconfirmRidePanel(true)} className="flex  border-2 active:border-black rounded-xl ml-2 mr-2 justify-between  items-center">
       <img className="h-20 w-24" src="https://media.zigcdn.com/media/model/2024/Jan/hero-splendor-plus-right-side-view_360x240.jpg" alt="" />
       <div  className="h-1/2">
          <h4 className="font-semibold text-sm">UberGo 2</h4>
          <h4 className="font-semibold text-sm">10 mins away</h4>
          <p className=" text-xs"> Affordable, compact rides</p>
       </div>
       <h2 className="font-medium mr-3 text-lg mb-6">$54.40</h2>
    </div>
    <div onClick={()=>props.setconfirmRidePanel(true)} className="flex border-2 active:border-black rounded-xl ml-2 mr-2 justify-between  items-center">
       <img className="h-20 w-24" src="https://i.pinimg.com/736x/2c/5e/14/2c5e1485755e664bcf7614cc4d492003.jpg" alt="" />
       <div  className="h-1/2">
          <h4 className="font-semibold text-sm">UberGo 4</h4>
          <h4 className="font-semibold text-sm">15 mins away</h4>
          <p className=" text-xs"> Affordable, compact rides</p>
       </div>
       <h2 className="font-medium mr-3 text-lg mb-6">$124.20</h2>
    </div>
  </div>
  )
}

export default VehiclePanel