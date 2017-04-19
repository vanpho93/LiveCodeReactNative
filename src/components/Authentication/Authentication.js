import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
                <Text>Authentication Component</Text>
                <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
