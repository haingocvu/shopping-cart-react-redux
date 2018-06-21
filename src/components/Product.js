import React, { Component } from 'react';
import { randomString } from "./../utils/random";
import * as Message from "./../constants/Message";

class Product extends Component {
    render() {
        let { product, onAddProductToCart, onChangeMessage } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={ product.image }
                            className="img-fluid" alt={ product.name } />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{ product.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                { this.showRating(product.rating) }
                            </li>
                        </ul>
                        <p className="card-text">
                            { product.description }
                </p>
                        <div className="card-footer">
                            <span className="left">{ product.price }$</span>
                            <span className="right">
                                <a 
                                    className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" data-placement="top" 
                                    title="" 
                                    data-original-title="Add to Cart"
                                    onClick={ () => {
                                        onAddProductToCart(product, 1);
                                        onChangeMessage(Message.MSG_ADD_PRODUCT_TO_CART_SUCCESS)
                                    } }
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showRating(rating) {
        let rs = [];
        for (let i = 0; i < rating; i++) {
           rs.push(<i className="fa fa-star" key={ randomString(10) }></i>);
        }
        for(let i = 0; i < (5-rating); i++) {
            rs.push(<i className="fa fa-star-o" key={ randomString(10) }></i>);
        }
        return rs;
    }

}

export default Product;
