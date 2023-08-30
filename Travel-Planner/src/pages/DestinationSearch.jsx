import { useState } from "react"
import { Link } from "react-router-dom"
import data from "../assets/places.json"

const Destination = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([])
  const [toggleModal, setToggleModal] = useState(true)

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    const suggestions = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setAutocompleteSuggestions(suggestions)
  }

  return (
    <div
      onClick={() => {
        setToggleModal(false)
      }}
      className="relative h-screen w-full bg-blue-50"
    >
      <div className="px-8 py-4">
        <input
          onClick={(e) => {
            setToggleModal(true)
            e.stopPropagation()
          }}
          type="text"
          placeholder="Search Destination- Tokyo, London, New York, Paris"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border-2 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        />
        {toggleModal && autocompleteSuggestions.length > 0 && (
          <ul className="mt-2 bg-white border rounded-md shadow-md absolute w-[97%] z-10">
            {autocompleteSuggestions.map((suggestion, index) => (
              <Link
                to={`/place/${suggestion.id}`}
                key={index}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-blue-100"
              >
                <img
                  src={suggestion.image}
                  alt={suggestion.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                {suggestion.name}
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className="max-w-[1240px] mx-auto h-auto w-full z-0 px-4 py-16 text-center">
        <h1>Destinations</h1>
        <p>On the Earth&apos;s best Places</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-4">
          <img
            className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
            src="beach.avif"
            alt=""
          />
          <img
            className="w-full h-full object-cover hover:scale-105 hover:rounded-xl duration-200"
            src="beach02.avif"
            alt=""
          />
          <img
            className="w-full h-full object-cover hover:scale-105 hover:rounded-xl duration-200"
            src="beach03.avif"
            alt=""
          />
          <img
            className="w-full h-full object-cover hover:scale-105 hover:rounded-xl duration-200"
            src="lake.avif"
            alt=""
          />
          <img
            className="w-full h-full object-cover hover:scale-105 hover:rounded-xl duration-200"
            src="land.avif"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Destination
