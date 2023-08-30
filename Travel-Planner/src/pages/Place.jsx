import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import data from "../assets/places.json"
import { StateContext } from "../App"

const Place = () => {
  const { id } = useParams()
  const [places, setPlaces] = useState(data)
  const [destination, setDestination] = useState()
  const [itenary, setItenary] = useContext(StateContext)
  const navigate = useNavigate()
  const [value, setValue] = useState({
    destination: destination?.destinations[0].name,
    checkIn: "",
    checkOut: "",
    id: 0,
  })

  useEffect(() => {
    const result = places.find((p) => p.id == id)
    setDestination(result)
  }, [id])

  const handleAdd = (e) => {
    e.preventDefault()
    if (
      value.destination.trim() !== " " &&
      value.checkIn !== " " &&
      value.checkOut !== " "
    ) {
      setItenary([...itenary, value])
      navigate("/itenary")
    }
  }

  return (
    <div className="min-h-screen flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-5 md:justify-between bg-green-50 p-8">
      <div className="flex flex-col items-center gap-5 justify-center w-full md:w-2/5 lg:w-1/5">
        <h1 className="md:hidden">{destination?.name}</h1>
        {destination?.destinations?.map((d, index) => (
          <div key={index}>
            <img className="rounded-xl md:w-72 md:h-72" src={d.img} alt="" />
          </div>
        ))}
      </div>

      <div className="md:mr-8 shadow-2xl rounded-xl p-4 md:w-3/5 lg:w-4/5">
        <div className="mt-4 w-full">
          <h1 className="hidden md:block">{destination?.name}</h1>

          <div className="mt-4 w-full flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row w-full">
              <form onSubmit={handleAdd} className="w-full lg:w-1/2">
                <div className="flex flex-col">
                  <input
                    type="submit"
                    value={"Add to Itenary"}
                    className="cursor-pointer px-4 py-2 text-center font-bold bg-gray-800 hover:opacity-80 text-gray-200 rounded"
                  />

                  <label className="my-2 text-xl">Destination </label>
                  <select
                    onChange={(e) => {
                      setValue({
                        ...value,
                        destination: e.target.value,
                        id: destination.id,
                      })
                    }}
                    className="p-2"
                  >
                    <option value="">Select</option>
                    {destination?.destinations.map((d, index) => (
                      <option
                        className="p-2 hover:bg-blue-100"
                        key={index}
                        value={d.name}
                      >
                        {d.name}
                      </option>
                    ))}
                  </select>
                  <label className="my-2 text-xl">Check-In</label>
                  <input
                    onChange={(e) => {
                      setValue({ ...value, checkIn: e.target.value })
                    }}
                    className="p-2 italic"
                    type="date"
                  />
                  <label className="my-2 text-xl">Check-Out</label>
                  <input
                    onChange={(e) => {
                      setValue({ ...value, checkOut: e.target.value })
                    }}
                    className="p-2 italic"
                    type="date"
                  />
                </div>
              </form>
              <div className="lg:w-1/2 p-2">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="w-full md:w-52 bg-gray-300 rounded  p-2">
                    <p>
                      Review - Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Assumenda optio ipsa expedita aspernatur
                      corporis repudiandae quas. Iste sunt maiores ratione.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="w-full md:w-52 bg-gray-300 rounded  p-2">
                    <p>
                      Review - Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Assumenda optio ipsa expedita aspernatur
                      corporis repudiandae quas. Iste sunt maiores ratione.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="w-full md:w-52 bg-gray-300 rounded  p-2">
                    <p>
                      Review - Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Assumenda optio ipsa expedita aspernatur
                      corporis repudiandae quas. Iste sunt maiores ratione.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-blue-100 p-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold">Travel Tips and Guide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Place
