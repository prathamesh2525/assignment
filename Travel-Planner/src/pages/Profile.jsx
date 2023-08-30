import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <div className="m-8 p-4 bg-blue-100 flex flex-col space-y-4">
      <span className="text-3xl font-bold">Profile Page</span>
      <Link
        className="rounded-xl block px-4 py-2 bg-gray-700 text-white self-start"
        to={"/itenary"}
      >
        Itenary
      </Link>
    </div>
  )
}

export default Profile
