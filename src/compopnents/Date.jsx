import React, { useEffect, useState } from 'react';
import { day, month } from '../Instances/Dates';
import moment from 'moment-jalaali';

const Date = () => {
    const [datePersian,setDatePersian]=useState('')
    const [time,setTime]=useState('')

    useEffect(()=>{
        let m=moment()
        let finalDate=`${day[m.day()]} ${m.jDate()} ${month[m.jMonth()]} ${m.jYear()}`
        setDatePersian(finalDate)
        setTime(m.format("HH:MM"))
    },[])

    return (
        <>
            <h6>{datePersian}</h6>
            <h6>ساعت {time}</h6>
        </>
    );
}

export default Date;
