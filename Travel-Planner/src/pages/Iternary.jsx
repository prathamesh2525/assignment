import { useContext } from "react"
import { StateContext } from "../App"
import Draggable from "react-draggable"
import { Link } from "react-router-dom"
import useGetLocation from "../components/useGetLocation"


const Iternary = () => {
  const [itenary] = useContext(StateContext)
  console.log(itenary)

  const getLatLon = (name)=> {
    const [lat,lon] = useGetLocation(name)
  }

  return (
    <div className="h-screen bg-red-100 p-10">
      <span className="text-4xl font-bold">Itenary</span>
      <div className="mt-10 max-w-3xl">
        {itenary.map((it, index) => (
          <Draggable key={index}>
            <div className="flex justify-between items-center px-8 bg-red-50 m-2 p-3 focus:ring focus:ring-blue-300 focus:outline-none">
              <div className="flex flex-col">
                <span className="text-xl font-bold">
                  Destination:{" "}
                  <span className="font-normal">{it.destination}</span>
                </span>
                <span className="text-xl font-bold">
                  Check In Date:{" "}
                  <span className="font-normal">{it.checkIn}</span>
                </span>
                <span className="text-xl font-bold">
                  Check Out Date:{" "}
                  <span className="font-normal">{it.checkOut}</span>
                </span>
                <span></span>
              </div>
              <div>
                <Link
                  to={`/booking/${it.id}`}
                  className="cursor-pointer px-4 py-2 text-center font-bold bg-gray-800 hover:opacity-80 text-gray-200 rounded"
                >
                  Book Flight
                </Link>
              </div>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  )
}

export default Iternary
