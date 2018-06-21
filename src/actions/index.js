import * as acTionType from "./../constants/ActionType";

const addProductToCart = (product, quantity) => {
    return {
        type: acTionType.ADD_PRODUCT_TO_CART,
        product,
        quantity
    }
}

const showMessage = message => {
    return {
        type: acTionType.SHOW_MESSAGE,
        message
    }
}

export { addProductToCart, showMessage };