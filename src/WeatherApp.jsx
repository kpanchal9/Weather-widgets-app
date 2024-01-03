import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Anand",
        feelsLike: 30.23,
        humidity: 24,
        temp: 31.99,
        tempMax: 31.99,
        tempMin: 31.99,
        weather: "clear sky",
    });

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}