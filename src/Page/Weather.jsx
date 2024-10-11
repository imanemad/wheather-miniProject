import React, { useEffect, useState } from 'react';
import Date from '../compopnents/Date';
import { useDispatch, useSelector } from 'react-redux';
import { sendWeatherRequest } from '../redux/weather/weatherActions';
// import { getWeather } from '../redux/weather/weatherActions';

const Weather = () => {
    const {loading,data,error}=useSelector(state=>state)
    const dispatch=useDispatch()
    const [background,setBackground]=useState('Cold')
    const [query,setQuery]=useState('')
    
    const handleLocation=(e)=>{
        e.preventDefault()
        dispatch(sendWeatherRequest(query))
        setQuery('')
    }    

    useEffect(()=>{
        if(!data.main){
            return
        }
        const temp=Number(String(data.main.temp).slice(0, 2))
        if(temp<12){
            return setBackground('Cold')
        }
        if(temp<30){
            return setBackground('Usual')
        }
        if(temp>30){
            return setBackground('Warm')
        }
        
    },[data])

    return (
        <div className={`Weather Back-${background}`}>
            <div className='Description'>
                {/* <Cities/> */}
                <form onSubmit={handleLocation} className='w-100'>
                    <input type="text" className='form-control' placeholder={data.name || "نام شهر را جستجو کنید"} value={query} onChange={(e)=>setQuery(e.target.value)}/>
                </form>
                <Date/>
                {/* <Condition/> */}
                {
                    loading?
                    <div>Loading...</div>
                    :data.main?
                    <>
                        <div className='FlexCenter'>
                            <h2 className='mx-3'>{String(data.main.temp).slice(0, 2)}</h2>
                            <h2 className='fw-bold mx-3'>{data.weather[0].main}</h2>
                        </div>
                    </>
                    :error?
                    (<div className='text-danger'>name is incorrect!!!</div>)
                    :
                    (<div className='text-success'>مکان مورد نظر را جستجو کنید</div>)
                }
            </div>
        </div>
    );
}

export default Weather;
