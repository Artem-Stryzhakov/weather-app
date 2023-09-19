import { useContext } from "react"

export function WeatherFuture(props) {
    return (
        <div className="future-weather m-auto row justify-content-center w-100 mb-3 mt-lg-0 mt-5">
            {props.children}
        </div>
    )
}