import { useEffect, useState } from "react";
import axios from "axios"

export function useWeather() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    
    const api = process.env.REACT_APP_API_KEY

    async function fetchWeather() {
      const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${api}&q=Tallinn&days=5&aqi=no&alerts=no`)
      setData(response)
      setLoading(false)
    }
  
    useEffect(() => {
      fetchWeather()
    }, [])
  
    return { data, loading }
}