/* 
    item component has been a bit complex component. should be updated. 
    it shows objects in an order in the list page.

*/

import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, Animated } from 'react-native'

import * as All from '../assets/index'
import { ItemComponentStyles } from '../styles/componentstyles'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { useDispatch } from 'react-redux';
import { removeCoins } from '../redux/actions/action'

const a = Dimensions.get('window').width;



//this component shows items inside state array as a list
export const Item = ({ title, symbol, percent, price, id }) => {
    const dispatch = useDispatch();
    //remove animations
    const leftSwipe = (progress, dragX) => {

        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        //this works to remove
        return (
            <TouchableOpacity onPress={() => dispatch(removeCoins(id))} activeOpacity={0.6}>
                <View style={ItemComponentStyles.deleteBox}>
                    <Animated.Text style={{ color: 'white', transform: [{ scale: scale }] }}>
                        Remove
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        );
    }
    //these variables to set if else conditions
    const percentGreenText = <Text style={{ fontSize: 14, color: 'green' }}>↗ {percent}%</Text>
    const percentRedText = <Text style={{ fontSize: 14, color: 'red' }}>↙ {percent}%</Text>

    return (
        //these part should be updated
        <Swipeable renderLeftActions={leftSwipe}>
            <View style={ItemComponentStyles.maincontainer}>
                <View style={ItemComponentStyles.container}>
                    <Image style={ItemComponentStyles.image} source={All[`${symbol}`]} />
                    <View style={ItemComponentStyles.titlecontainer}>
                        <Text style={ItemComponentStyles.titletext}>{title}</Text>
                        <Text>{symbol}</Text>
                    </View>
                    <View style={ItemComponentStyles.pricecontainer}>
                        <Text style={{ fontSize: 20 }}>${price}</Text>
                        {(percent >= 0) ? percentGreenText : percentRedText}
                    </View>

                </View>
                <View style={ItemComponentStyles.separator} />
            </View>
        </Swipeable>
    )
}
