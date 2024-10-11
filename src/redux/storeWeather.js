import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import weatherReducer from "./weather/weatherReducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./weather/weatherSaga";

const sagaMiddleware=createSagaMiddleware()

export const storeWeather=createStore(weatherReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watcherSaga)

