
//homeheader component, this component can be updated in future

import React from 'react'
import { View, Text, Image } from 'react-native'

import { HomeHeaderStyles } from '../styles/componentstyles'

const HomeHeader = () => {
    return (
        <View style={HomeHeaderStyles.container}>
            <Text style={HomeHeaderStyles.text}>CryptoTracker Pro</Text>
            <Image style={HomeHeaderStyles.image} source={require('../assets/pp.png')} />
        </View>
    )
}

export default HomeHeader