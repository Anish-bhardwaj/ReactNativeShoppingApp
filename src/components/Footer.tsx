import React, { Component } from 'react'
import { Text, StyleSheet, View,Button, TouchableOpacity } from 'react-native'

export default class Footer extends Component {
    goToCart = () => {
        this.props.navigation.navigate('Cart');
    };
    goToHome=()=>{
      this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btn} onPress={this.goToHome}><Text style={styles.btnText}>Home</Text></TouchableOpacity> 
                <TouchableOpacity style={styles.btn} onPress={this.goToCart}><Text style={styles.btnText}>Cart</Text></TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor: 'rgb(15,23,42)',
    },
    btn:{
        
    },
    btnText:{
        color:'#16A34A',
        fontSize:20,
        fontWeight:'900'
    }
})
