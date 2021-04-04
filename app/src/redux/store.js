import { combineReducers , createStore, applyMiddleware, compose  } from "redux"
import thunkMiddlewere from "redux-thunk"
// import { reducer as formReducer } from "redux-form"

import appReducer from "./app-reducer"
import songsReducer from "./songs-reducer"

let reducers = combineReducers({
    songsPage: songsReducer,
    app: appReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddlewere)
  ))

window.store = store

export default store