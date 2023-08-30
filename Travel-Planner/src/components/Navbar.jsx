import { BsPerson } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNavbar = () => {
    setNav(!nav)
  }

  return (
    <div className="flex w-full justify-between items-center h-20 px-8 absolute z-10 text-white">
      <div>
        <h1>Planner</h1>
      </div>
      <ul className="hidden md:flex">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/search"}>
          Destinations
        </Link>
        <Link className="link" to={"/reviews"}>
          Reviews
        </Link>
        <Link className="link" to={"/tips"}>
          Tips
        </Link>
        <Link className="link" to={"/book"}>
          Book
        </Link>
      </ul>

      {/* Menu Button */}
      <div className="hidden md:flex space-x-2">
        <Link to={"/search"}>
          <BiSearch size={20} />
        </Link>
        <Link to={"profile"}>
          <BsPerson size={20} />
        </Link>
      </div>

      {/* Mobile */}
      <div
        onClick={handleNavbar}
        className="block md:hidden cursor-pointer z-10"
      >
        {nav ? (
          <AiOutlineClose color="black" size={20} />
        ) : (
          <HiOutlineMenuAlt3 size={20} />
        )}
      </div>
      <div
        onClick={handleNavbar}
        className={
          nav
            ? "absolute left-0 top-0 text-black w-full bg-gray-100/90 px-4 py-6 flex flex-col"
            : "absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-6 flex flex-col"
        }
      >
        <ul>
          <h1>Planner</h1>
          <li className="border-b-2 border-gray-300">Home</li>
          <li className="border-b-2 border-gray-300">Destinations</li>
          <li className="border-b-2 border-gray-300">Tips</li>
          <li className="border-b-2 border-gray-300">Reviews</li>
          <li className="border-b-2 border-gray-300">Book</li>
          <div className="flex justify-between px-4 text-xl py-3">
            <button className="bg-slate-300 rounded px-4 py-3 font-bold">
              Search
            </button>
            <button className="bg-slate-300 rounded px-4 py-3 font-bold">
              Profile
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
