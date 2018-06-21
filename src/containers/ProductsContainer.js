import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import { map } from "lodash";
import Product from "./../components/Product";
import PropTypes from 'prop-types';
import * as Actions from "./../actions/index";

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        )
    }

    showProducts(products) {
        let rs = [];
        if(products.length) {
            rs = map(products, (product, index) => {
                return <Product 
                            key={ index } 
                            product={ product } 
                            onAddProductToCart={ this.props.onAddProductToCart } 
                            onChangeMessage={ this.props.onChangeMessage }
                        />
            })
        }
        return rs;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProp = state => {
    return {
        products: state.products
    }
}

const mapDisPatchToProp = (dispatch, prop) => {
    return {
        onAddProductToCart: (product, quantity) => {
            dispatch(Actions.addProductToCart(product, quantity))
        },
        onChangeMessage: message => {
            dispatch(Actions.changeMessage(message))
        }
    }
}

export default connect(mapStateToProp, mapDisPatchToProp)(ProductsContainer);