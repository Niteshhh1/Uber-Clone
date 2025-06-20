/* eslint-disable react/prop-types */



function RidePopUp(props) {

  return (
    <div onClick={()=>props.setridePopUpPanel(false)} >
    <h3 className="font-medium text-2xl">New Ride Available!</h3>
    <div className="mt-2 flex bg-yellow-300 p-4 rounded-md justify-between items-center">
        <div className="flex gap-2">
            <img className="h-10 w-10 rounded-full" src="https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg" alt="" />
            <h3 className="font-semibold mt-1 text-xl">Nitesh Patel</h3>
        </div>
        <div>
            <h4 className="font-semibold text-lg">2.3 Km</h4>
        </div>
    </div>
    <div className="flex flex-col justify-between items-center">
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
      <button onClick={()=>props.setconfirmRidePop(true)} className="w-full rounded bg-green-600 m-2 border border-black p-1 text-xl">Accept</button>
      <button onClick={()=>props.setridePopUpPanel(false)} className="w-full rounded bg-gray-600 m-2 border border-black p-1 text-xl">Ignore</button>
    </div>
  </div>
  )
}

export default RidePopUp