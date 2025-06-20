
function CaptainDetails() {
  return (
    <div>
          <div className="mt-5 flex flex-col justify-between items-center ">
            <div className="flex gap-3 text-xl font-semibold">
                <img className="h-12 w-12 rounded-full" src="https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg" alt="" />
                <h4 className="text-xl mt-2">Nitesh Patel</h4>
                <div className="ml-14"><h4  className="text-xl font-semibold">$295</h4>
                <p>Earned</p></div>
            </div>
          </div>
          <div className="flex bg-yellow-300 items-center justify-center h-20 rounded flex-row gap-5 mt-8 ">
            <div className="">
              <h4 className="text-xl font-semibold">10.2 KM</h4>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">10.2 KM</h4>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">10.2 KM</h4>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails