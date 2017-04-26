import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CartView extends Component {
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#D6D6D6' }}>
                <Text>Cart Component</Text>
                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                    <Text>Go to PRODUCT_DETAIL</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default CartView;
