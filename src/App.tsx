import { WeatherCurrent, Loading, WeatherFuture, Forecast } from "./components";
import { useWeather } from "./hooks/useWeather";

function App() {
    const { weather, loading, getWeather } = useWeather();

    if (loading || !weather) {
        return <div className='weather-body container rounded d-flex flex-column justify-content-around position-relative'>
            {<Loading/>}
        </div>
    }



    // CURRENT //
    const { icon, text } = weather.data.current.condition;
    const { humidity, temp_c, pressure_mb, wind_kph } = weather.data.current;
    const { name, country } = weather.data.location;


    // FORECAST //
    const forecast = weather.data.forecast.forecastday.map((weather, i) => (
        <Forecast
            date={weather.date}
            icon={weather.day.condition.icon}
            statusText={weather.day.condition.text}
            temperature={weather.day.avgtemp_c}
            key={i}
        />
    ));



    return (
        <div className='weather-body container rounded d-flex flex-column justify-content-around position-relative'>
            <WeatherCurrent
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
            <WeatherFuture>
                {forecast}
            </WeatherFuture>
        </div>
  );
}

export default App;
