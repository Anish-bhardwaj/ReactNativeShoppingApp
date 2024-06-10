import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import ProductInfo from './src/screens/ProductInfo';
import Cart from './src/screens/Cart';
import { AppContextProvider } from './src/context/AppContext';


const Stack=createNativeStackNavigator();
export class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{
            title: 'Ecomzy',
            headerStyle: {
              backgroundColor: 'rgb(15,23,42)',
            },
            headerTintColor: '#16A34A',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
            <Stack.Screen name='ProductInfo' component={ProductInfo} options={{title:"ProductInfo",headerStyle: {
              
              backgroundColor: 'rgb(15,23,42)',
            },
            headerTintColor: '#16A34A',
            headerTitleStyle: {
              fontWeight: 'bold',
            },} }/>
            <Stack.Screen name='Cart' component={Cart} options={{title:"Cart", headerStyle: {
              backgroundColor: 'rgb(15,23,42)',
            },
            headerTintColor: '#16A34A',
            headerTitleStyle: {
              fontWeight: 'bold',
            },}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    )
  }
}

export default App