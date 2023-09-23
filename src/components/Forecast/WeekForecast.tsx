import { ReactNode } from "react";

export type WeekForecastProps = {
    children: ReactNode;
}

export function WeekForecast({ children }: WeekForecastProps ) {
    return (
        <div className="future-weather m-auto row justify-content-center w-100 mb-3 mt-lg-0 mt-5">
            {children}
        </div>
    )
}