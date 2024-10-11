import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherTypes"

export const sendWeatherRequest=(query)=>{
    return{
        type:SEND_WEATHER_REQUEST,
        payload:query
    }
}

export const receiveWeatherResponse=(data)=>{
    return{
        type:RECEIVE_WEATHER_RESPONSE,
        payload:data
    }
}

export const receiveWeatherError=(error)=>{
    return{
        type:RECEIVE_WEATHER_ERROR,
        payload:error,
    }
}

// export const getWeather=(query)=>{
//     return dispatch=>{
//         dispatch(sendWeatherRequest())
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=923926dd6e708cb3ac1a58b8b466a384`).then(res=>{
//             dispatch(receiveWeatherResponse(res.data))
//         }).catch(error=>{
//             dispatch(receiveWeatherError(error.message))
//         })
//     }
// }