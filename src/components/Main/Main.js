import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';
import checkLogin from '../../api/checkLogin';

export default class Main extends Component {
    componentDidMount() {
        checkLogin(token)
        .then(res => console.log('CHECK LOGIN', res))
        .catch(err => console.log('LOI CHECK LOGIN', err));
    }
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };
    render() {
        const { navigator } = this.props;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigator={navigator} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
