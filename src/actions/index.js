import * as acTionType from "./../constants/ActionType";

const addProductsToCart = (product, quantity) => {
    return {
        type: acTionType.ADD_PRODUCT_TO_CART,
        product,
        quantity
    }
}

export default addProductsToCart;