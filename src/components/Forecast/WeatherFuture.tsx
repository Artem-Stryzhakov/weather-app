import { ReactNode } from "react";

export type WeatherFutureProps = {
    children: ReactNode;
}

export function WeatherFuture({ children }: WeatherFutureProps ) {
    return (
        <div className="future-weather m-auto row justify-content-center w-100 mb-3 mt-lg-0 mt-5">
            {children}
        </div>
    )
}