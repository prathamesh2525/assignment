import { useState, useEffect } from "react"
import axios from "axios"

function useGetLocation({ city }) {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  useEffect(() => {
    async function fetchCoordinates() {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            city
          )}`
        )

        if (response.data.length > 0) {
          setLatitude(response.data[0].lat)
          setLongitude(response.data[0].lon)
        }
      } catch (error) {
        console.error(`Error fetching coordinates for ${city}:`, error)
      }
    }

    fetchCoordinates()
  }, [city])

  return [latitude, longitude]
}

export default useGetLocation
