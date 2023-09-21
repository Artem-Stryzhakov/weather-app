import { useEffect, useState } from "react";
import { fetchWeather } from "./fetchWeather";

export function useWeather() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getWeather = async (city, days) => {
    setLoading(true);
    const response = await fetchWeather(city, days);
    setData(response);
    setLoading(false);
  };

    useEffect(() => {
      getWeather();
    }, []);

  return { data, loading, getWeather };
}
