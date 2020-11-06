import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/homescreen'
import { SearchScreen } from '../screens/searchscreen'


const Stack = createStackNavigator();

function MainNav() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Homea" component={HomeScreen} options={{headerShown:true}} />
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
      </Stack.Navigator>
   
  );
}

export default MainNav;