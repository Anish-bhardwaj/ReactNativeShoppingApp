import React, { Component } from 'react'
import { Text, StyleSheet, View,Button, Image,TouchableOpacity, Alert } from 'react-native'
import { AppContext } from '../context/AppContext';

export default class Card extends Component {
    static contextType = AppContext;
    goToProduct = (item) => {
        this.props.navigation.navigate('ProductInfo',{item:item});
    };
    addItemToCart = (item) => {
        this.context.addToCart(item);
    };
    removeItemFromCart = (id) => {
        this.context.removeFromCart(id);
    };
  render() {
    const item=this.props.item;
    return (
    <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.price}>${item.price}</Text> */}
        <View style={styles.priceContainer}>        
            <Text style={styles.originalPrice}>
                ${item?.price}
            </Text>
            <Text style={styles.discountPrice}>
                ${(item.price * 0.9).toFixed(2)}
            </Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>this.goToProduct(item)}>
            <Text style={styles.buttonText}>DETAILS</Text>
        </TouchableOpacity>
        {
            this.context.cart.some((p)=>p.id==item.id)?(
                <TouchableOpacity style={[styles.button, styles.addToCartButton] } onPress={()=>this.removeItemFromCart(item.id)}>
                    <Text style={styles.buttonText}>REMOVE FROM CART</Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={[styles.button, styles.addToCartButton] } onPress={()=>this.addItemToCart(item)}>
                    <Text style={styles.buttonText}>ADD TO CART</Text>
                </TouchableOpacity>
            )
        }
        
    </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginHorizontal:5,
        marginVertical: 10,
        elevation: 8,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
        resizeMode:'contain'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    priceContainer: {
        flexDirection:'row',
        paddingVertical: 12,
        paddingHorizontal: 12,    
        marginBottom: 12,    
        borderRadius: 6,
        backgroundColor: '#deffeb',
        gap:5,
        marginHorizontal:10
    },
    originalPrice: {
        fontSize: 18,
        fontWeight: '600',
        marginRight: 8,    
        color: '#ff4c4c',
        textDecorationLine: 'line-through',
    },
    discountPrice: {
        fontSize: 18,
        color: '#4caf50',
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginRight: 5,
    },
    addToCartButton: {
        backgroundColor: '#28a745',
        marginRight: 0,
        marginLeft: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})
