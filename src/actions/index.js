import * as ActionType from "./../constants/ActionType";

const addProductToCart = (product, quantity) => {
    return {
        type: ActionType.ADD_PRODUCT_TO_CART,
        product,
        quantity
    }
}

const changeMessage = message => {
    return {
        type: ActionType.CHANGE_MESSAGE,
        message
    }
}

export { addProductToCart, changeMessage };