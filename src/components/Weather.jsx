export function Weather(props) {
    return (
        <div className="weather-body container rounded border border-1">
            <div className="current-weather d-flex justify-content-between w-100">
                <section className="main-city-data d-grid">
                    <img src={props.icon} alt={props.text}/>
                    <h3>{props.text}</h3>
                    <span>{props.city}</span>
                    <h2>{props.temperature}</h2>
                </section>
                <section className="secondary-city-data">
                    <div className="humidity d-grid">
                        <h4>{props.humidity}</h4>
                    </div>
                    <div className="air-pressure">
                        <h4>{props.pressure}</h4>
                    </div>
                    <div className="rain">
                        <h4>{props.rain}</h4>
                    </div>
                    <div className="wind-speed">
                        <h4>{props.wind}</h4>
                    </div>
                </section>
            </div>
            <div className="future-weather d-flex w-100">
    
            </div>
      </div>
    )
}