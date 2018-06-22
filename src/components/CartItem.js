import React, { Component } from 'react';
import * as Message from "./../constants/Message";

class CartItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={ item.product.image }
                        alt={ item.product.name } className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ item.product.name }</strong>
                    </h5>
                </td>
                <td>{ item.product.price }$</td>
                <td className="center-on-small-only">
                    <span className="qty">{ item.quantity } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
                            onClick={ () => this.handleUpdateProductQuantityInCart(item.product, item.quantity - 1) }
                        >
                            <a>—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
                            onClick={ () => this.handleUpdateProductQuantityInCart(item.product, item.quantity + 1) }
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.showSubTotal(item.quantity, item.product.price) }$</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick={ () => this.handleRemoveItem(item.product) }
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    handleRemoveItem = product => {
        let { onRemoveProductInCart, onChangeMessage } = this.props;
        onRemoveProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    handleUpdateProductQuantityInCart = (product, newQuantity) => {
        if(newQuantity > 0) {
            let { onUpdateProductQuantityInCart, onChangeMessage } = this.props;
            onUpdateProductQuantityInCart(product, newQuantity);
            onChangeMessage(Message.MSG_UPDATE_PRODUCT_QUANTITY_IN_CART_SUCCESS);
        }
    }

    showSubTotal = (quantity, price) => {
        return quantity * price;
    }

}

export default CartItem;
