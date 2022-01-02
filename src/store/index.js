import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { resultsReducer } from "./reducers/resultsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    resultsModule: resultsReducer
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
