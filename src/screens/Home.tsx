import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Button, FlatList } from 'react-native'
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default class Home extends Component {
    static contextType = AppContext;
    addItemToCart = (item) => {
        this.context.addToCart(item);
    };
    goToCart = () => {
        this.props.navigation.navigate('Cart');
    };
    goToHome=()=>{
      this.props.navigation.navigate('Home');
    }
    goToProduct=(item)=>{
        this.props.navigation.navigate('ProductInfo',{item:item});
    }
  render() {
    return (
      <View>
        {
          this.context.loading?(
            <Text style={styles.loadingText}>Loading.....</Text>
          ):(
            <View>
              <FlatList data={this.context.shoppingItems}  renderItem={({item,})=>(

                <Card item={item} navigation={this.props.navigation}/>
                
              ) } contentContainerStyle={styles.listContent}/>
            
            <Footer navigation={this.props.navigation}/>
          </View>   
          )
        }
        
      </View>
    )
  }
}

  

const styles = StyleSheet.create({
  loadingText:{
    fontSize:30,
    textAlign:'center',
    paddingTop:20
  },
  listContent: {
    paddingBottom: 50, 
},
  
})
