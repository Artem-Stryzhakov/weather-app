
export type BaseWeatherProps = {
    humidity: string | number,
    pressure: string | number,
    wind: string | number,
    temperature: string | number,
}

export type WeatherProps = {
    icon: string,
    text: string,
    city: string,
    rain: string | number,
} & BaseWeatherProps

export function Weather({
    icon,
    temperature,
    text,
    city,
    humidity,
    pressure,
    rain,
    wind
}: WeatherProps) {
    return (
        <div className="weather-body container rounded border border-1">
            <div className="current-weather d-flex justify-content-between w-100">
                <section className="main-city-data d-grid">
                    <img src={icon} alt={text}/>
                    <h3>{text}</h3>
                    <span>{city}</span>
                    <h2>{temperature}</h2>
                </section>
                <section className="secondary-city-data">
                    <div className="humidity d-grid">
                        <h4>{humidity}</h4>
                    </div>
                    <div className="air-pressure">
                        <h4>{pressure}</h4>
                    </div>
                    <div className="rain">
                        <h4>{rain}</h4>
                    </div>
                    <div className="wind-speed">
                        <h4>{wind}</h4>
                    </div>
                </section>
            </div>
            <div className="future-weather d-flex w-100">
    
            </div>
      </div>
    )
}