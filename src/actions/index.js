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

const removeProductInCart = product => {
    return {
        type: ActionType.REMOVE_PRODUCT_IN_CART,
        product
    }
}

const updateProductQuantityInCart = (product, quantity) => {
    return {
        type: ActionType.UPDATE_PRODUCT_QUANTITY_IN_CART,
        product,
        quantity
    }
}

export { addProductToCart, changeMessage, removeProductInCart, updateProductQuantityInCart };