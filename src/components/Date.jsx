import React from 'react'
import { DateContainer } from './DateStyle'

const DateToday = () => {

    let today = new Date();
   console.log(today)
    let date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate()

  return (
    <DateContainer>
        <p>{date}</p>
    </DateContainer>
  )
}

export default DateToday