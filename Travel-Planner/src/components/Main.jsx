import { Link } from "react-router-dom"

const Main = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <video
        className="w-full h-full object-cover"
        src="landing-1080.mp4"
        autoPlay
        loop
        muted
      />

      <Link
        to={"/search"}
        className="absolute text-2xl md:text-3xl font-semibold bg-gray-200/20 rounded-xl hover:opacity-80 px-4 py-2  z-10 text-white"
      >
        Start Your Journey Now
      </Link>
    </div>
  )
}

export default Main
