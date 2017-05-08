import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, ListView,
    Image, RefreshControl
} from 'react-native';
import getListProduct from '../../../../api/getListProduct';

import backList from '../../../../media/appIcon/backList.png';

const url = 'http://localhost/api/images/product/';
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
            refreshing: false,
            page: 1
        };
        this.arr = [];
    }

    componentDidMount() {
        const idType = this.props.category.id;
        getListProduct(idType, 1)
        .then(arrProduct => {
            this.arr = arrProduct;
            this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.arr) });
        })
        .catch(err => console.log(err));
    }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    render() {
        const {
            container, header, wrapper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
         } = styles;
        const { category } = this.props;
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ListView 
                        removeClippedSubviews={false}
                        dataSource={this.state.listProducts}
                        renderRow={product => (
                            <View style={productContainer}>
                                <Image style={productImage} source={{ uri: `${url}${product.images[0]}` }} />
                                <View style={productInfo}>
                                    <Text style={txtName}>{toTitleCase(product.name)}</Text>
                                    <Text style={txtPrice}>{product.price}$</Text>
                                    <Text style={txtMaterial}>Material {product.material}</Text>
                                    <View style={lastRowInfo}>
                                        <Text style={txtColor}>Colo {product.color}</Text>
                                        <View style={{ backgroundColor: product.color.toLowerCase(), height: 16, width: 16, borderRadius: 8 }} />
                                        <TouchableOpacity onPress={() => this.gotoDetail(product)}>
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        refreshControl={
                            <RefreshControl 
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({ refreshing: true });
                                    const newPage = this.state.page + 1;
                                    const idType = this.props.category.id;
                                    getListProduct(idType, newPage)
                                    .then(arrProduct => {
                                        this.arr = arrProduct.concat(this.arr);
                                        this.setState({ 
                                            listProducts: this.state.listProducts.cloneWithRows(this.arr),
                                            refreshing: false 
                                        });
                                    })
                                    .catch(err => console.log(err));
                                }}
                            />
                        }
                    />
                </View>
            </View>
        );
    }
}

/*
    <ScrollView style={wrapper}>
        <View style={header}>
            <TouchableOpacity onPress={this.goBack.bind(this)}>
                <Image source={backList} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>{category.name}</Text>
            <View style={{ width: 30 }} />
        </View>
        <View style={productContainer}>
            <Image style={productImage} source={sp1} />
            <View style={productInfo}>
                <Text style={txtName}>Lace Sleeve Si</Text>
                <Text style={txtPrice}>117$</Text>
                <Text style={txtMaterial}>Material silk</Text>
                <View style={lastRowInfo}>
                    <Text style={txtColor}>Colo RoyalBlue</Text>
                    <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                    <TouchableOpacity>
                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});
