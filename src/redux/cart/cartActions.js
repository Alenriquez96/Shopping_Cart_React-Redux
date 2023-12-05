import { GET_ALL_PRODUCTS, ADD_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_CART } from './cartTypes'

//Actions que seran llamadas como argumento en los dispatch que usemos, se define el tipo  
// y se pasa el "payload" (info que necesita la "action" para modificar el estado)
export const getAllProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload: products
    }
}

export const addToCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}

export const increaseQuantity = (i) => {
    return {
        type: INCREASE_QUANTITY,
        payload: i
    }
}

export const decreaseQuantity = (i) => {
    return {
        type: DECREASE_QUANTITY,
        payload: i
    }
}

export const deleteCart = (i) => {
    return {
        type: DELETE_CART,
        payload: i
    }
}



