import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import DestinationSearch from "./pages/DestinationSearch"
import Place from "./pages/Place"
import { createContext, useState } from "react"
import Iternary from "./pages/Iternary"
import Profile from "./pages/Profile"
import Book from "./pages/Book"

export const StateContext = createContext()

function App() {
  const [itenary, setItenary] = useState([])

  return (
    <div className="font-poppins">
      <Router>
        <StateContext.Provider value={[itenary, setItenary]}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<DestinationSearch />} />
            <Route path="/place/:id" element={<Place />} />
            <Route path="/itenary" element={<Iternary />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </StateContext.Provider>
      </Router>
    </div>
  )
}

export default App
