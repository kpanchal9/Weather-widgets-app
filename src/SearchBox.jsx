import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
// import { makeStyles } from '@mui/material';

// const useStyle = makeStyles({
//     sr:{
//         borderRadius: "20px",
//     }
// });

export default function SearchBox({ updateInfo }) {

    // const classes = useStyle();

    let [city, setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a44d4cc5cf7e22b18593731cbd51060e";


    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResopnse = await response.json();
            console.log(jsonResopnse);
            let result = {
                city: city,
                temp: jsonResopnse.main.temp,
                tempMin: jsonResopnse.main.temp_min,
                tempMax: jsonResopnse.main.temp_max,
                humidity: jsonResopnse.main.humidity,
                feelsLike: jsonResopnse.main.feels_like,
                weather: jsonResopnse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" color="secondary" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br></br><br></br>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p>No Such Place found in API</p>}
            </form>
        </div>
    )
}