import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import { map } from "lodash";
import Product from "./../components/Product";

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
        rs = map(products, (product, index) => {
            return <Product key={ index } product={ product } />
        })
        return rs;
    }
}

const mapStateToProp = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProp, null)(ProductsContainer);