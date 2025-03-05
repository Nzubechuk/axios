import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WeatherContainer, Temp, City } from './WeatherStyle'

const Weather = () => {
    const [city, setCity] = useState('enugu')
    const [data, setData] = useState(null)

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=bea77714696f983525fb882a721ae7eb`
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [city])

    if(!data) return null;

    return (
        <WeatherContainer>
            <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
            <City>{data.name}, {data.sys.country}</City>
        </WeatherContainer>
    )
}

export default Weather