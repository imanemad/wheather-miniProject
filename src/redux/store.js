import logger from "redux-logger";
import userReducer from "./users/usersReducer";
import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store=createStore(userReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store