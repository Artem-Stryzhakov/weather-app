import { useEffect, useState } from "react";
import axios from "axios"
import { WeatherCurrent } from "./components/WeatherCurrent";
import { WeatherFuture } from "./components/WeatherFuture";
import { ForecastWeather } from "./components/forecastWeather";
import { Loading } from "./components/Loading";

function useWeather() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  async function fetchWeather() {
    const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=0c0fb6d8b98b40ceb96103306231609&q=Tallinn&days=5&aqi=no&alerts=no")
    setData(response)
    setLoading(false)
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return { data, loading }
}

function App() {
  const {data, loading} = useWeather() 

  // CURRENT //
  const { icon, text } = !loading && data.data.current.condition;
  const { humidity, temp_c, pressure_mb, wind_kph } = !loading && data.data.current;
  const { name, country } = !loading && data.data.location;

  // FORECAST //
  const forecast = !loading && data.data.forecast.forecastday

  !loading && console.log(data)

  function handleFormSubmit(e) {
    e.preventdefault()

    const city = e.target.elements.city.value

    const newApiUrl = `http://api.weatherapi.com/v1/forecast.json?key=0c0fb6d8b98b40ceb96103306231609&q=${city}&days=5&aqi=no&alerts=no`;
  }

  return (
    <div className="weather-body container rounded d-flex flex-column justify-content-around position-relative">
      {loading && <Loading/>}

      { !loading && 
        <WeatherCurrent icon={icon} text={text}
          city={name} country={country}
          temperature={temp_c} humidity={humidity}
          pressure={pressure_mb} wind={wind_kph}
        />
      }
      { !loading &&
        <WeatherFuture>
          {forecast.map((weather, i) => <ForecastWeather 
            date={weather.date}
            icon={weather.day.condition.icon}
            text={weather.day.condition.text}
            temperature={weather.day.avgtemp_c}
            key={i}
          />)}
        </WeatherFuture>
      }
    </div>
  );
}

export default App;