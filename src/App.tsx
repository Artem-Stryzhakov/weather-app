import { WeatherToday, Loading, WeekForecast, Forecast } from "./components";
import { useWeather } from "./hooks";

function App() {
    const { weather, loading, getWeather } = useWeather();

    if (loading || !weather) {
        return <div className='weather-body container rounded d-flex flex-column justify-content-around position-relative'>
            {<Loading/>}
        </div>
    }



    const { icon, text } = weather.data.current.condition;
    const { humidity, temp_c, pressure_mb, wind_kph } = weather.data.current;
    const { name, country } = weather.data.location;


    const forecast = weather.data.forecast.forecastday.map((weather, i) => (
        <Forecast
            date={weather.date}
            icon={weather.day.condition.icon}
            text={weather.day.condition.text}
            temperature={weather.day.avgtemp_c}
            key={i}
        />
    ));



    return (
        <div className='weather-body container rounded d-flex flex-column justify-content-around position-relative'>
            <WeatherToday
                icon={icon}
                text={text}
                city={name}
                country={country}
                temperature={temp_c}
                humidity={humidity}
                pressure={pressure_mb}
                wind={wind_kph}
                handleSearch={getWeather}
            />
            <WeekForecast>
                {forecast}
            </WeekForecast>
        </div>
  );
}

export default App;
