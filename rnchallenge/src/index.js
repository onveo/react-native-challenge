import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { store } from './redux/store/store'
import HomeScreen from './screens/homescreen'
import SearchScreen from './screens/searchscreen'
import HomeHeader from './components/homeheader'

const Stack = createStackNavigator()

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        headerTitle: <HomeHeader />, headerStyle: {
                            backgroundColor: '#375774',
                            height: 120
                        }
                    }} />
                    <Stack.Screen name="Search" component={SearchScreen}  options={{headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App
