import * as acTionType from "./../constants/ActionType";

const addProductToCart = (product, quantity) => {
    return {
        type: acTionType.ADD_PRODUCT_TO_CART,
        product,
        quantity
    }
}

export { addProductToCart };