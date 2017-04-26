import React, { Component } from 'react';
import { Navigator } from 'react-native';

import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

class Cart extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'CART_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART_VIEW': return <CartView navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

export default Cart;
