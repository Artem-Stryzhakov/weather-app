import { useEffect, useState } from "react";
import { fetchWeather } from "./fetchWeather";


export type DayData = {
  condition: {
    icon: string;
    text: string;
  };
  avgtemp_c: number;
}

export type LocationData = {
  name: string;
  country: string;
}

export type ConditionData = {
  icon: string;
  text: string;
}

export type WeatherData = {
  data: {
    current: {
      condition: ConditionData;
      humidity: number;
      temp_c: number;
      pressure_mb: number;
      wind_kph: number;
    };
    location: LocationData;
    forecast: {
      forecastday: Array<{
        date: string;
        day: DayData;
      }>;
    };
  };
}
export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | undefined>();
  const [loading, setLoading] = useState(true);

  // @ts-ignore
  const getWeather = async (city?:string, days?:string) => {
    setLoading(true);
    const response = await fetchWeather(city, days);
    setWeather(response);
    setLoading(false);   
  };

    useEffect(() => {
      getWeather();
      console.log("Got data")
    }, []);

  return { weather, loading, getWeather };
}
