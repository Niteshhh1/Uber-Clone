import { Link } from "react-router-dom"


function Riding() {
  return (
    <div className="h-screen">
      <Link to="/home" className="absolute right-4 bg-black text-white rounded w-14 flex justify-center top-10">Home</Link>
      <img className="bg-white rounded absolute w-16 ml-5 mt-3" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt=""/>
       <div className="">
         <img  className="object-cover" src="https://www.researchgate.net/publication/347977917/figure/fig1/AS:974070116012033@1609247821367/Map-showing-location-of-selected-sites-of-Indore-city-Google-satellite-images.png"/>
       </div>
       <div className="flex  gap-9 flex-row">
          <img className="h-32 w-40" src="https://parkplus-bkt-img.parkplus.io/production/crawler/public/Crawler0fdc6ed433bb11efaefe938c3743fbe5_20240626182319033036.jpg" alt="" />
            <div className="text-lg font-medium mt-3">
                <h2>MP-09-@!@!</h2>
                <h2>Nitesh Patidar</h2>
                <h2>Indore, Chapda</h2>
            </div>
        </div>
          <div className=" font-medium">
            <div className="border-b-2 ml-5 p-1">
              <h3>Indore Road Chapda</h3>
              Indore (M.P.)
            </div>
            <div className=" p-1 ml-5">
              <h3>$199</h3>
              Cash ON Delivery
            </div>
       </div>
       <button className="font-semibold text-lg mt-2 bg-green-500 w-full">Make a Payment</button>
    </div>
  )
}

export default Riding