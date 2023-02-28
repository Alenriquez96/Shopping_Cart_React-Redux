import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from "./cart/cartReducer";

const store = createStore(cartReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;