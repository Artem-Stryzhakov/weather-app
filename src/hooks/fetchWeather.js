import axios from "axios";

export async function fetchWeather(city = "Tallinn", days = "6") {

  const apiKey = process.env.REACT_APP_API_KEY;
  
  return await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`
  );
  }