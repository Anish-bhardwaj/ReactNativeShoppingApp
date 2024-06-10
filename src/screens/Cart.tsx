import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView,Button, TouchableOpacity, Image, Alert } from 'react-native'
import { AppContext } from '../context/AppContext';


export default class Cart extends Component {
    static contextType = AppContext;
    goToHome = () => {
        this.props.navigation.navigate('Home');
    };
    removeItemFromCart = (id) => {
        this.context.removeFromCart(id);
    };
    checkOutHandler=()=>{
            Alert.alert( 'Succesfully Placed Order');
            this.context.clearCart();
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        {
                this.context.cart.length===0&&(
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyMessage}>Cart is empty</Text>
                        <TouchableOpacity style={styles.homeBtn} onPress={this.goToHome}><Text style={styles.homeBtnText}>Shop Now</Text></TouchableOpacity>
                    </View>
                )
        }
        {/* Items list */}
        <View style={styles.itemContainer}>
        {this.context.cart.map((item) => (
        <View key={item.id} style={styles.item}>
            <View style={{backgroundColor:'#fff', borderRadius:15}}>
                <Image source={{uri:item?.image}} style={styles.img}/>
            </View>
            <View style={styles.dataView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={ styles.priceContainer}>
                <Text style={styles.originalPrice}>
                    ${item?.price}
                </Text>
                <Text style={styles.discountPrice}>
                    ${(item.price * 0.9).toFixed(2)}
                </Text>
                
            </View>
            
            <TouchableOpacity style={styles.delBtn}  onPress={() => this.removeItemFromCart(item.id)}><Text>Remove</Text></TouchableOpacity>
            
            </View>
            <View style={{height:1, backgroundColor:'gray', marginTop:10, marginBottom:-10}}/>
        </View>
        ))}
        </View>

        {/* CheckOut options */}
        {
            this.context.cart.length!=0&&(
                <View style={styles.checkOutContainer}>
                <Text style={ styles.cartText }>Your Cart</Text>
                <Text style={styles.summaryText}>Summary</Text>
                <Text style={styles.itemsText}>Total items: {this.context.cart.length}</Text>
                <Text style={styles.amountText}>Total Amount: ${this.context.cart.reduce((acc,curr)=>acc+curr.price ,0).toFixed(2)}</Text>
                <TouchableOpacity style={styles.checkOutBtn} onPress={this.checkOutHandler}><Text style={styles.checkOutBtnTxt}>Checkout Now</Text></TouchableOpacity>
            </View>
            )
        }
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2'
    },
    emptyContainer:{
        height:'100%',
        width:'100%',
        flex:1,
        gap:10,        
        justifyContent:'center',
        alignItems:'center'
    },
    emptyMessage:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:10,
        color:'rgb(15,23,42)'
    },
    homeBtn:{
        backgroundColor:'rgb(22,163,74)',
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:10,
        marginTop:10
    },
    homeBtnText:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
    },
    itemContainer:{
        flex:1,
        paddingHorizontal:10,
        marginTop:5
    },
    item:{
        flex:1,
        backgroundColor:'white',
        borderRadius:12,
        marginTop:20,
        elevation:10,
    },
    img:{
        height:150,
        resizeMode:'contain'
    },
    dataView:{
        flex:1,
        gap:4,
        marginTop:4
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        color:'#333333'
    },
    description:{
        paddingHorizontal:10,
        paddingVertical:4,
        color:'#333333',
        opacity:0.6,
        fontWeight:'500',
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
    delBtn:{
        backgroundColor:'#e57373',
        width:'25%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:5,
        borderRadius:10,
        marginLeft:10,
        marginBottom:2
    },
    checkOutContainer:{
        marginTop:20,
        marginVertical:10,
        paddingHorizontal:10,
        flex:1,
        gap:4
    },
    cartText:{
        color:'#166534',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    summaryText:{
        fontSize:20,
        color:'#15803d'
    },
    itemsText:{
        fontSize:19
    },
    amountText:{
        fontSize:19
    },
    checkOutBtn:{
        backgroundColor:'rgb(21 128 61)',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:5,        
        paddingVertical:10,
        borderRadius:10
    },
    checkOutBtnTxt:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    }
})
