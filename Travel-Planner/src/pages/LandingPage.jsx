import Navbar from "../components/Navbar"
import Main from "../components/Main"
import useGetLocation from "../components/useGetLocation"

const LandingPage = () => {
  const [lat, lon] = useGetLocation("tokyo")
  console.log(lat, lon)
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

export default LandingPage
