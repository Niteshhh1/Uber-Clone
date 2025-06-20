import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <div className="bg-cover bg-[url(https://www.miniphysics.com/wp-content/uploads/2011/05/file-AYQMIHQeCrps7zXtPZbUT8Iv.webp)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400">
        <img className="bg-white rounded w-16 ml-8" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt=""/>
          <div className="bg-white pb-7 px-6 py-5">
            <h3 className="text-3xl font-bold">Get Started with Uber</h3>
            <Link className="flex items-center justify-center bg-black w-full text-white py-3 rounded mt-5" to="/user-login" >Continue</Link>
          </div>
        </div>
    </div>
  )
}

export default Home