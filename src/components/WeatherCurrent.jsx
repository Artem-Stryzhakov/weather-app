import { DataTypes } from "../types/DataTypes";
import { DataDisplay } from "./DataDisplay";
import { WeatherInput } from "./WeatherInput";
export function WeatherCurrent(props) {
    return (
      <div className='current-weather row w-100 mt-3 m-auto'>
        <section className='main-city-data d-grid col-sm-3'>
          <img src={props.icon} alt={props.text} />
          <h3 className='m-0'>{props.text}</h3>
          <span className='city-name'>{props.city}</span>
          <h2>{props.temperature} °C</h2>
          <span className='country d-flex gap-2 align-items-center rounded'>
            <i className='fa-solid fa-globe'></i>
            {props.country}
          </span>
        </section>
        <WeatherInput inputHandle={props.inputHandle} />
        <section className='secondary-city-data d-flex flex-column align-items-end col-sm-3'>
          <div className='d-flex flex-column gap-2'>
            <DataDisplay
              data={props.humidity}
              {...DataTypes.Humidity}
            />
            <DataDisplay
              data={props.pressure}
              {...DataTypes.Air_Pressure}
            />
            <DataDisplay
              data={props.wind}
              {...DataTypes.Wind_Speed}
            />
          </div>
        </section>
      </div>
    );
}