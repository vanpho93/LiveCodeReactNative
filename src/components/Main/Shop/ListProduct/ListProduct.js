import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#80A4DA' }}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                    <Text>Go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
