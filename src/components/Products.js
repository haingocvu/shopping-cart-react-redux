import React, { Component } from 'react';
import Product from "./Product";
import { connect } from "react-redux";
import { map } from "lodash";

class Products extends Component {
    render() {
        let { products } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* <!-- Product --> */}
                    { this.showProducts(products) }
                </div>
            </section>
        );
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

export default connect(mapStateToProp, null)(Products);
