import * as actionType from "./../constants/ActionType";
import { findIndex } from "lodash";

let data = JSON.parse(localStorage.getItem('cart'));

let initialState = data?data:[];

const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    switch (action.type) {
        case actionType.ADD_PRODUCT_TO_CART:
            let productIndex = findIndex(state, cartItem => {
                return cartItem.product.id === product.id
            });
            if(productIndex !== -1) {
                //exists. then change quantity
                state[productIndex].quantity += quantity
            } else {
                //not exists. push
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state]
    
        default:
            return [...state]
    }
}

export default cart;