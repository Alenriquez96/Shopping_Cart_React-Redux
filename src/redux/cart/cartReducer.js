import { GET_ALL_PRODUCTS, ADD_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_CART } from './cartTypes'

const INITIAL_STATE = {
    numberItems: 0,
    cartItems: [],
    _products: [] //solo lo utilizamos para traer todos los productos del fetch y utilizarlo en la action "GET ALL"
}

//Función reducer que define lo que tiene que modificar cada tipo de "action"

function cartReducer(state = INITIAL_STATE, action) { 
    
    //Se declara una variable copia de cartItems para evitar la mutabilidad del estado en las operaciones
    let newCart = [...state.cartItems]

    //Se declara un switch para definir las tareas para los tipos de "actions"
    switch (action.type) {
        //Accion para traer todos los productos, retorna el estado inicial, pero cambia "_products" con el payload que trae todo.
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                _products: action.payload
            }
        //Accion de añadir un producto al carrito
        case ADD_CART:
            // Si el "numberItems" del estado inicial es 0, se define un objeto "cart", se pushea al array "newCart", 
            //que representa la copia del array de productos del carrito
            
            if (state.numberItems === 0) {
                let cart = {
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    category: action.payload.category,
                    image: action.payload.image,
                    price: action.payload.price,
                    description: action.payload.description
                }
                newCart.push(cart);
            //Si no, se define un booleano en false que sirve para verificar si el producto ya se encontrabaen la cesta y aumentar 
            //su cantidad en vez de añadirlo de nuevo
            } else {
                let check = false;
                //Verificar si id corresponde con id de algun producto de la cesta, si es asi, check=true y aumenta la cantidad en 1
                state.cartItems.forEach((item, i) => {
                    if (item.id === action.payload.id) {
                        newCart[i].quantity++;
                        check = true;
                    }

                });
                //Si el id no corresponde con ningun producto de la cesta, check sigue siendo "false" y entonces se pushea el producto nuevo al array
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        title: action.payload.title,
                        quantity: 1,
                        category: action.payload.category,
                        image: action.payload.image,
                        price: action.payload.price,
                        description: action.payload.description
                    }
                    newCart.push(_cart);
                }
            }
            //Se retorna el estado ya actualizado y se aumenta la clave "numberItems" en +1 y se guarda cartItems como la copia modificada (newCart)
            return {
                ...state,
                cartItems: newCart,
                numberItems: state.numberItems + 1
            }
        //Acción para incrementar la cantidad de un producto del carrito
        case INCREASE_QUANTITY:
            //Se modifica la cantidad de producto pasado por el "payload"
            newCart[action.payload].quantity++;
            //Se retorna el estado actual, modificando "cartItems" y aumentando en +1 "numberItems"
            return {
                ...state,
                cartItems: newCart,
                numberItems: state.numberItems + 1
            }
        //Acción para decrementar cantidad de un producto en carrito
        case DECREASE_QUANTITY:
            //Declaras una variable con la cantidad del producto del payload
            let qty = newCart[action.payload].quantity;
            //Si la cantidad es mayor a 1, se resta 1 a la cantidad
            if (qty > 1) {
                newCart[action.payload].quantity--;
                //Se retorna el state, modificando cartItems (se ha modificado "quantity" de un producto) y numberItems (-1)
                return {
                    ...state,
                    cartItems: newCart,
                    numberItems: state.numberItems - 1

                }
            //Si la cantidad es 1
            } else {
                //Se iguala a 0 la cantidad del producto pasado por el payload
                newCart[action.payload].quantity = 0;
                //Se retorna el estado actual, modificando cartItems, filtrando e producto eliminado y restando 1 al numberItems
                return {
                    ...state,
                    cartItems: newCart.filter(item => item.id !== state.cartItems[action.payload].id),
                    numberItems: state.numberItems - 1

                }
            }

        case DELETE_CART:
            //Declara una variable para guardar la cantidad del producto pasado por payload
            let quantity_ = state.cartItems[action.payload].quantity;
            //Retorna el estado, modificando numberItems, restando la cantidad del producto borrado y filtrandolo de cartItems
            return {
                ...state,
                numberItems: state.numberItems - quantity_,
                cartItems: state.cartItems.filter(item => item.id !== state.cartItems[action.payload].id)
            }
        //por defecto se devuelve el estado inicial
        default:
            return state;
    }
}

export default cartReducer;