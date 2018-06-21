import React, { Component } from 'react';

class Cart extends Component {
    render() {
        let children = this.props.children;
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>name</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* cart item && cart result */}
                            { children }
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Cart;
