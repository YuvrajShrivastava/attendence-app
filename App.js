import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import Hello from './screens/summaryScreen'



export default function App() {
  
    return (
      <View>
        <AppContainer/>
      </View>   
    )
  
}
var AppNavigator = createSwitchNavigator({
    Hello:Hello,

  HomeScreen:HomeScreen,

  
})
const AppContainer = createAppContainer(AppNavigator)
