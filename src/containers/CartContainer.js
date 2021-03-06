import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Cart from "./../components/Cart";
import { map, forEach } from "lodash";
import CartItem, { } from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import * as Action from "./../actions/index";

class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showCartResult(cart) }
            </Cart>
        );
    }
    showCartItem = cart => {
        let { onRemoveProductInCart, onChangeMessage, onUpdateProductQuantityInCart } = this.props;
        let rs = null;
        if(cart.length) {
            rs = map(cart, (item, index) => {
                return (
                    <CartItem 
                        item={ item } 
                        key={ index } 
                        onRemoveProductInCart={ onRemoveProductInCart }
                        onChangeMessage={ onChangeMessage }
                        onUpdateProductQuantityInCart = { onUpdateProductQuantityInCart }
                    />
                )
            })
        }
        return rs;
    }

    showCartResult = cart => {
        let rs = null;
        if(cart.length) {
            rs = <CartResult totalPrice={ this.showTotalPrice(cart) }/>
        }
        return rs;
    }

    showTotalPrice = cart => {
        let rs = 0;
        forEach(cart, (item, index) => {
            rs += item.product.price * item.quantity;
        })
        return rs;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }),
        quantity: PropTypes.number.isRequired
    })),
    onRemoveProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductQuantityInCart: PropTypes.func.isRequired,
}

const mapStateToProp = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onRemoveProductInCart: product => {
            dispatch(Action.removeProductInCart(product))
        },
        onChangeMessage: message => {
            dispatch(Action.changeMessage(message))
        },
        onUpdateProductQuantityInCart: (product, quantity) => {
            dispatch(Action.updateProductQuantityInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(CartContainer);