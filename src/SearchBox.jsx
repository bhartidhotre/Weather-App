import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d79f6e675f16e05670a890249a38e596";

    let genInfoByAPI = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                console.log("city was not found");
            }
            let jsonRes = await response.json();
            console.log(jsonRes);
            let result = {
                city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
            }

            console.log(result);
            return result;
        } catch (err) {
            console.log(err);
            setError(true);
            return null;
        }

    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            let newInfo = await genInfoByAPI();
            if (newInfo) {
                updateInfo(newInfo);
            }
        } catch (err) {
            console.log(err);
            setError(true);
        }


    };
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
                <br />
                <br />
                <Button style={{marginTop:"-15px"}} variant="contained" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>No such place exit!</p>}
            </form>
        </div>
    )
}