import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">PRODUCT LIST</h1>
                <div className="row">
                    {/* <!-- Product --> */}
                    { this.props.children }
                </div>
            </section>
        );
    }
}

export default Products;
