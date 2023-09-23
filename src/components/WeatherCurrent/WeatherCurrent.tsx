import { DataTypes } from "../../types/DataTypes";
import { DataDisplay } from "../DataDisplay";
import { CitySearch, CitySearchProps } from "../CitySearch";
import { BaseWeatherProps } from "../Weather";



export type WeatherCurrentProps = {
    icon: string,
    text: string,
    city: string,
    country: string

} & BaseWeatherProps & CitySearchProps


export function WeatherCurrent({
    icon,
    temperature,
    text,
    city,
    handleSearch,
    humidity,
    pressure,
    wind,
    country

}: WeatherCurrentProps) {
    return (
      <div className='current-weather row w-100 mt-3 m-auto'>
        <section className='main-city-data d-grid col-sm-3'>
          <img src={icon} alt={text} />
          <h3 className='m-0'>{text}</h3>
          <span className='city-name'>{city}</span>
          <h2>{temperature} °C</h2>
          <span className='country d-flex gap-2 align-items-center rounded'>
            <i className='fa-solid fa-globe'></i>
            {country}
          </span>
        </section>
        <CitySearch handleSearch={handleSearch} />
        <section className='secondary-city-data d-flex flex-column align-items-end col-sm-3'>
          <div className='d-flex flex-column gap-2'>
            <DataDisplay
              data={humidity}
              {...DataTypes.Humidity}
            />
            <DataDisplay
              data={pressure}
              {...DataTypes.Air_Pressure}
            />
            <DataDisplay
              data={wind}
              {...DataTypes.Wind_Speed}
            />
          </div>
        </section>
      </div>
    );
}