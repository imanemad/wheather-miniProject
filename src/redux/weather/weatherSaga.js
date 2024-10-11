import { call, put, takeLatest } from "redux-saga/effects";
import { SEND_WEATHER_REQUEST } from "./weatherTypes";
import axios from "axios";
import { receiveWeatherError, receiveWeatherResponse } from "./weatherActions";

const getWeatherRequest=(query)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=923926dd6e708cb3ac1a58b8b466a384`)
}

function* handleGetweather(action){
    try {
        const res=yield call(getWeatherRequest,action.payload)
        yield put(receiveWeatherResponse(res.data))
    } catch (error) {
        yield put(receiveWeatherError(error.message))
    }
}

export function* watcherSaga(){
    yield takeLatest(SEND_WEATHER_REQUEST,handleGetweather)
} 