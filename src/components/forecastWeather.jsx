export function ForecastWeather(props) {
    return (
        <div className="card-weather d-flex flex-column align-items-center p-2 col-lg-2 col-sm-4 rounded mb-2">
            <p className="date">{props.date}</p>
            <div className="d-flex align-items-center gap-1">
                <div className="icons-forecast">
                    <img src={props.icon} alt={props.text} />
                </div>
                <span className="weather-status">{props.text}</span>
            </div>
            <span className="fs-2 fw-bold">{props.temperature} °C</span>
        </div>
    )
}