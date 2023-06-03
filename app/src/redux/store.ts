import { combineReducers , createStore, applyMiddleware, compose  } from "redux"
import thunkMiddlewere from "redux-thunk"

import appReducer from "./app-reducer"
import songsReducer from "./songs-reducer"

let reducers = combineReducers({
    songsPage: songsReducer,
    app: appReducer
});

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddlewere)
  ))
  
// @ts-ignore
window.store = store

export default store