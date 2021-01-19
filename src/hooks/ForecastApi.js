import { useState, useEffect } from 'react';
import axios from 'axios';


const api_key = '026c4e68c48ac25953dd175376fd84c6'

function ForecastApi() {
    const [forecast, setForecast] = useState([]);

    const requestApi = async () => {
        const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=${api_key}`;
        const result = await axios.get(baseUrl).then(res => setForecast(res.data));
        return result;
    }

    useEffect(() => {
        return requestApi();
    }, [])

    return [forecast];
}

export default ForecastApi;
