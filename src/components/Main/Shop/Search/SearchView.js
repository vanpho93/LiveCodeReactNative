import React, { Component } from 'react';
import { 
    StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Dimensions 
} from 'react-native';

import sp1 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class SearchView extends Component {
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer, wrapper
        } = styles;
        return (
            <ScrollView style={wrapper}>
                <View style={product}>
                    <Image source={sp1} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('black dress')}</Text>
                        <Text style={txtPrice}>100$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color white</Text>
                            <View
                                style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    marginLeft: 10
                                }}
                            />
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp4} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('black dress')}</Text>
                        <Text style={txtPrice}>100$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color white</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={txtColor}>Color white</Text>
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'white',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#DFDFDF',
        flex: 1
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});

export default SearchView;
