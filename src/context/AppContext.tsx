import React, { createContext, Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'
export const AppContext=createContext();
export  class AppContextProvider extends Component {
    state={
        cart:[],
        shoppingItems: [],
        loading:true
    };
    componentDidMount() {
        this.fetchShoppingItems();
    }
    
    fetchShoppingItems = async() => {
        this.setState({ loading: true }); 
        try{
            const response=await fetch('https://fakestoreapi.com/products');
            const data=await response.json()
            this.setState({ shoppingItems: data ,loading: false});
            

        }
        catch(err){
            console.log("Error while fetching details")
        }
    };
    addToCart = (item) => {
        this.setState((prevState) => ({
            cart: [...prevState.cart, item]
        }));
    };
    clearCart = () => {
        this.setState((prevState) => ({
            cart: []
        }));
    };
    
    removeFromCart = (itemId) => {
        this.setState((prevState) => ({
            cart: prevState.cart.filter(item => item.id !== itemId)
        }));
    };
    render() {
        return (
            <AppContext.Provider value={{
                cart: this.state.cart,
                shoppingItems: this.state.shoppingItems,
                addToCart: this.addToCart,
                clearCart:this.clearCart,
                removeFromCart: this.removeFromCart,
                loading:this.state.loading
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}


