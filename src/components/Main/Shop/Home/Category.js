import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle} >LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight} >
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
                            <Image source={littleIcon} style={imageStyle}>
                                <Text style={cateTitle}>Maxi Dress</Text>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
                            <Image source={maxiIcon} style={imageStyle}>
                                <Text style={cateTitle}>Maxi Dress</Text>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
                            <Image source={partyIcon} style={imageStyle}>
                                <Text style={cateTitle}>Maxi Dress</Text>
                            </Image>
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});
