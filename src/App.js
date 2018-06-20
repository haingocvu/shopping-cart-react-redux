import React, { Component } from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Message from "./components/Message";
import Footer from "./components/Footer";
class App extends Component {
    render() {
        return (
            <div>
                {/* <!-- Header --> */}
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        {/* <!-- Products --> */}
                        <Products />
                        {/* <!-- Message --> */}
                        <Message />
                        {/* <!-- Cart --> */}
                        <Cart />
                    </div>
                </main>
                {/* <!-- Footer --> */}
                <Footer />
            </div>
        );
    }
}

export default App;
