import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
import "./WeatherBox.css";
export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 21.05,
        tempMin: 21.05,
        tempMax: 21.05,
        humidity: 43,
        weather: "haze",
        feelsLike: 20.33,
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <div className='WeatherBox'>
            <h2 style={{textAlign:"center", marginTop:"-20px"}}> Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            {weatherInfo && <InfoBox info={weatherInfo} />}
        </div>
    );
}