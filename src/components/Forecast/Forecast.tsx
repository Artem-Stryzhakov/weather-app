import { ConditionData } from "../../hooks";

export type ForecastProps = {
    date: string,
    temperature: string | number,
} & ConditionData

export function Forecast({
    icon,
    date,
    text,
    temperature
}: ForecastProps) {
    return (
        <div className="card-weather d-flex flex-column align-items-center p-2 col-lg-2 col-sm-4 rounded mb-2">
            <p className="date">{date}</p>
            <div className="d-flex align-items-center gap-1">
                <div className="icons-forecast">
                    <img src={icon} alt={text} />
                </div>
                <span className="weather-status">{text}</span>
            </div>
            <span className="fs-2 fw-bold">{temperature} °C</span>
        </div>
    )
}