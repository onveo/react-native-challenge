
/* 
    --ı didnt want to create extra readme so ıll 
    this is the top page *** so we use provider here
    create navigation folder and carry some codes to there  

    ** as much as possible tried to not use packages. 
    for example i didnt use vector icons that you suggested, instead ı used basic text characters
    but when app gets bigger we have to use normal icon sets 

    *** ı prefered functional components generally. 
    if you ask for class based components ı can quickly prepare it as well 

    *** ı prefered to use redux as state manager, ı want to add redux-thunk as well. 
    but we could also use normal state management as well

    *** need to add and remove more codes

*/

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
                    <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App
