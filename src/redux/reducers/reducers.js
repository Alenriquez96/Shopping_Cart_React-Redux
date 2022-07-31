const initProduct = {
    numberCart:0,
    Carts:[],
    _products:[]
}

function shopping(state = initProduct, action) {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return{
                ...state,
                _products: action.payload
            }

        case "NUMBER_CART":
            return{
                ...state
            }


        case "ADD_CART":
            if(state.numberCart===0){
                let cart = {
                    title:action.payload.title,
                    quantity:1,
                    category:action.payload.category,
                    image:action.payload.image,
                    price:action.payload.price,
                    description: action.payload.description
                } 
                state.Carts.push(cart); 
            } else{
                let check = false;
                state.Carts.map((item,i)=>{
                    if(item.id===action.payload.id){
                        state.Carts[i].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart +1
            }

        case "INCREASE_QUANTITY":
            state.numberCart++
            state.Carts[action.payload].quantity++;
            
            return{
                ...state
            }

        case "DECREASE_QUANTITY":
            let quantity = state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
            
            return{
                ...state
            }
        case "DELETE_CART":
            let quantity_ = state.Carts[action.payload].quantity;
            return{
                ...state,
                numberCart:state.numberCart - quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.id!==state.Carts[action.payload].id
                })   
            }

        
        default:
            return state;
    }
}


export default shopping;