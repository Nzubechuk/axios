import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import { WeatherContainer, Temp, City } from './WeatherStyle'

const url = 'https://api.openweathermap.org/data/2.5/weather?q=enugu&units=imperial&appid=bea77714696f983525fb882a721ae7eb'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])

    console.log(data)

    if(!data) return null;

  return (
    <WeatherContainer>
        <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
        <City>ENUGU, NGR</City>
    </WeatherContainer>
  )
}

export default Weather