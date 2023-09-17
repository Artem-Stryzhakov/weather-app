import { useEffect, useState } from "react";
import axios from "axios"
import { Weather } from "./components/Weather";

function useWeather() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  async function fetchWeather() {
    const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=0c0fb6d8b98b40ceb96103306231609&q=London&aqi=no")
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

  //const { icon, text } = data.data.current.condition;

  !loading && console.log(data)

  return (
    { loading ? <div>TEST</div> : null }
  );
}

export default App;
