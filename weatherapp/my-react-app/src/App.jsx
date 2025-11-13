import { useState, useEffect } from 'react'
import './App.css'
import Weather from './component/weather.jsx'

function App() {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    fetch('https://mocki.io/v1/8fa07f67-1fc8-4267-b661-bb668e763c15')
      .then(res => res.json())
      .then(data => setWeatherData(data))
      .catch(err => console.error("Error fetching weather:", err))
  }, [])

  return (
    <>
      <div>
        <Weather data={weatherData} />
      </div>
    </>
  )
}

export default App
