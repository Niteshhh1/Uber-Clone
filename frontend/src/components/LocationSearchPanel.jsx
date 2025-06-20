
function LocationSearchPanel(props) {
  
  
  
  const location = [
    "AB Indore road, Chapda",
    "BC Bagli road, Lakhwada",
    "AB Indore road, Chapda",
    "BC Bagli road, Lakhwada"
  ]
  return ( 
    <div className=" items-center flex-col flex">
       {location.map((elem)=>{
        // eslint-disable-next-line react/prop-types
        return (<div onClick={()=>{props.setvehiclePanel(true)
          // eslint-disable-next-line react/prop-types
          props.setpanelOpen(false)
        }} 
        key={elem} className="flex h-12 border-2 border-white rounded-xl active:border-black w-72 items-center my-3 justify-center">
        <h4 className="text-lg font-medium ">{elem}
            <p className="text-sm">near bagli, Chapda</p>
        </h4>
     </div>)
       })}
    </div>
  )
}

export default LocationSearchPanel