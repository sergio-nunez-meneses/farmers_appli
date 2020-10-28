import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FarmersList from '../Components/FarmersList';
import FarmDetails from '../Components/FarmDetails';
import FarmSchedules from '../Components/FarmSchedules';
// import InsertFarmer from '../Components/InsertFarmer';

export default class Navigation extends React.Component {
  Stack = createStackNavigator();

  render() {
    return (
      <NavigationContainer>
        <this.Stack.Navigator>
          <this.Stack.Screen name="FarmersList" component={FarmersList}/>
          <this.Stack.Screen name="FarmDetails" component={FarmDetails}/>
          <this.Stack.Screen name="FarmSchedules" component={FarmSchedules}/>
          {/* <this.Stack.Screen name="InsertFarmer" component={InsertFarmer}/> */}
        </this.Stack.Navigator>
      </NavigationContainer>
    );
  }
}