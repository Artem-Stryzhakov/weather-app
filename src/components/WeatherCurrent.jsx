export function WeatherCurrent(props) {
    return (
        <div className="current-weather row w-100 mt-3 m-auto">
            <section className="main-city-data d-grid col-sm-3">
                <img src={props.icon} alt={props.text}/>
                <h3 className="m-0">{props.text}</h3>
                <span className="city-name">{props.city}</span>
                <h2>{props.temperature} °C</h2>
                <span className="country d-flex gap-2 align-items-center rounded">
                    <i className="fa-solid fa-globe"></i>
                    {props.country}
                </span>
            </section>
            <form action="" className="form d-flex gap-2 col-sm-6">
                <input type="text" className="form-control" name="city" placeholder="Enter the city..."/>
                <button type="submit" className="btn">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </form>
            <section className="secondary-city-data d-flex flex-column align-items-end col-sm-3">
                <div className="d-flex flex-column gap-2">
                    <div className="humidity d-flex gap-2">
                        <div className="right-icons d-flex justify-content-center">
                            <i className="fa-solid fa-droplet mt-2 fs-4"></i>
                        </div>
                        <div>
                            <span>Humidity</span>
                            <h4>{props.humidity} %</h4>
                        </div>
                    </div>
                    <div className="air-pressure d-flex gap-2">
                        <div className="right-icons d-flex justify-content-center">
                            <i className="fa-solid fa-cloud mt-2 fs-4"></i>
                        </div>
                        <div>
                            <span>Air Pressure</span>
                            <h4>{props.pressure} MS</h4>
                        </div>
                    </div>
                    <div className="wind-speed d-flex gap-2">
                        <div className="right-icons d-flex justify-content-center">
                            <i className="fa-solid fa-wind mt-2 fs-4"></i>
                        </div>
                        <div>
                            <span>Wind speed</span>
                            <h4>{props.wind} km/h</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}