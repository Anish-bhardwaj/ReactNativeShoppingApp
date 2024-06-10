import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import { AppContext } from '../context/AppContext';

export default class ProductInfo extends Component {
    static contextType = AppContext;
    addItemToCart = (item) => {
        this.context.addToCart(item);
    };
    goToCart = () => {
        this.props.navigation.navigate('Cart');
    };
    deleteFromCart=(itemId)=>{
        this.context.removeFromCart(itemId);
    }
    render() {
        const { item } = this.props.route.params;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={{uri:item?.image}} style={styles.img}/>
                    <View style={styles.dataView}>
                        
                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating}>{item?.rating?.rate}★</Text>
                            <Text style={styles.ratingCount}>{item?.rating?.count} ratings</Text>
                        </View>
                        <Text style={styles.category}>Category: {item.category}</Text>
                        <Text style={styles.title}>{item?.title}</Text>
                        <View style={ styles.priceContainer}>
                            <Text style={styles.originalPrice}>
                                ${item?.price}
                            </Text>
                            <Text style={styles.discountPrice}>
                                ${(item.price * 0.9).toFixed(2)}
                            </Text>
                            
                        </View>
                        <Text style={styles.description}><Text style={{color:'#008c00',fontWeight:'700'}}>Description:</Text> {item?.description}</Text>
                        <View style={styles.btnContainer}>
                        {
                            this.context.cart.some((p)=>p.id==item.id)?
                            (<TouchableOpacity style={styles.btn} onPress={()=>this.deleteFromCart(item.id)}><Text style={styles.btnText}>Remove from cart</Text></TouchableOpacity>  ):
                            (<TouchableOpacity style={styles.btn} onPress={()=>this.addItemToCart(item)}><Text style={styles.btnText}>Add To Cart</Text></TouchableOpacity>)
                            }
                        <TouchableOpacity style={styles.btn} onPress={()=>this.goToCart()}><Text style={styles.btnText}>Go To Cart</Text></TouchableOpacity> 
                        </View>
                    </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#fff',
        flex:1,
        gap:4
    },dataView:{
        marginTop:20
    },
    img:{
        height:350,
        resizeMode:'contain'
    },
    ratingContainer:{
        flex:1,
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        marginBottom:10
    },
    rating:{
        marginRight: 4,
        borderRadius: 4,
        paddingVertical:3,
        paddingHorizontal: 12,
        justifyContent: 'center',
        backgroundColor: '#008c00',
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    ratingCount: {
        fontSize: 14,
        color: '#878787',
    },
    category:{
        fontSize: 16,
        color: '#878787',
        marginBottom:5,
    },
    title:{
        marginBottom:5,
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    priceContainer: {
        flexDirection:'row',
        paddingVertical: 12,
        paddingHorizontal: 12,    
        marginBottom: 12,    
        borderRadius: 6,
        width:'100%',
        backgroundColor: '#deffeb',
        gap:5
    },
    originalPrice: {
        fontSize: 18,
        fontWeight: '600',
        marginRight: 8,
    
        color: 'rgba(0, 0, 0, 0.5)',
        textDecorationLine: 'line-through',
    },
    discountPrice: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '600',
    },
    description:{
        marginTop:5,
        fontSize:16,
        lineHeight:28
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:2,
        paddingTop:9
    },
    btn:{
        backgroundColor:'rgb(15,23,42)',
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:20,
    },
    btnText:{
        color:'white'

    }

})
