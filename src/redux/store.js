import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from "./cart/cartReducer";
//Aquí se crea el Store y se inicializa el estado global
const store = createStore(cartReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;