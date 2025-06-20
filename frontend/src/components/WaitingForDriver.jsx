/* eslint-disable react/prop-types */


function WaitingForDriver(props) {
  return (
    <div onClick={()=>props.WaitingForDriverRef(true)} className="mb-12 ">
        <div className="flex justify-between">
            <img className="h-40 w-40" src="https://parkplus-bkt-img.parkplus.io/production/crawler/public/Crawler0fdc6ed433bb11efaefe938c3743fbe5_20240626182319033036.jpg" alt="" />
            <div className="text-lg font-medium mt-8">
                <h2>MP-09-@!@!</h2>
                <h2>Nitesh Patidar</h2>
                <h2>Indore, Chapda</h2>
            </div>
         </div>
         <div>
            <input className="border-b-2 text-xl" type="text" placeholder="Type you want to send..." />
         </div>
         <div className="w-full mt-2  text-lg font-medium">
          <div className="border-b-2  p-2">
            <h3>Indore Road Chapda</h3>
            Indore (M.P.)
          </div>
          <div className="border-b-2 p-2">
            <h3>Indore Road Chapda</h3>
            Indore (M.P.)
          </div>
          <div className=" p-2">
             <h3>$199</h3>
             Cash ON Delivery
          </div>
      </div>
    </div>
  )
}

export default WaitingForDriver