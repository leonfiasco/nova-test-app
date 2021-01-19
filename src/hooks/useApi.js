import { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = '026c4e68c48ac25953dd175376fd84c6';

function useApi() {
    const [weather, setWeather] = useState([]);

    const requestApi = async () => {
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${api_key}`;
        const result = await axios.get(baseUrl).then(res => setWeather(res.data));
        return result;

    }

    useEffect(() => {
        return requestApi();
       }, [])

    return [weather];
}

export default useApi;
