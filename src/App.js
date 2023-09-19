import { WeatherCurrent } from "./components/WeatherCurrent";
import { WeatherFuture } from "./components/WeatherFuture";
import { ForecastWeather } from "./components/forecastWeather";
import { Loading } from "./components/Loading";
import { useWeather } from "./hooks/useWeather";


function App() {
  const { data, loading, getWeather } = useWeather();


  // CURRENT //
  const { icon, text } = !loading && data.data.current.condition;
  const { humidity, temp_c, pressure_mb, wind_kph } =
    !loading && data.data.current;
  const { name, country } = !loading && data.data.location;

  // FORECAST //
  const forecast = !loading && data.data.forecast.forecastday;

  !loading && console.log(data);

  return (
    <div className='weather-body container rounded d-flex flex-column justify-content-around position-relative'>
      {loading && <Loading />}

      {!loading && (
        <WeatherCurrent
          icon={icon}
          text={text}
          city={name}
          country={country}
          temperature={temp_c}
          humidity={humidity}
          pressure={pressure_mb}
          wind={wind_kph}
          inputHandle={getWeather}
        />
      )}
      {!loading && (
        <WeatherFuture>
          {forecast.map((weather, i) => (
            <ForecastWeather
              date={weather.date}
              icon={weather.day.condition.icon}
              text={weather.day.condition.text}
              temperature={weather.day.avgtemp_c}
              key={i}
            />
          ))}
        </WeatherFuture>
      )}
    </div>
  );
}

export default App;
