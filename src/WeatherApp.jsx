import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,stateWeatherInfo] = useState({
        city:"Wonderland",
       feelsLike: 40.05,
       humidity:75,
       temp:33.05,
       tempMax:33.05,
       tempMin:33.05,
       weather:"haze",
    });

    let updateInfo = (newInfo) =>{
        stateWeatherInfo(newInfo)
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Namita</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>

        </>
    )
}