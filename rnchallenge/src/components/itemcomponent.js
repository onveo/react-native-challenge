/* 
    item component has been a bit complex component. should be updated. 
    it shows objects in an order in the list page.

*/

import React from 'react';
import { Text, View, Image } from 'react-native'

import * as All from '../assets/index'
import { ItemComponentStyles } from '../styles/componentstyles'


export const Item = ({ title, symbol, percent, price }) => {

    //these variables to set if else conditions
    const percentGreenText = <Text style={{ fontSize: 14, color: 'green' }}>↗ {percent}</Text>
    const percentRedText = <Text style={{ fontSize: 14, color: 'red' }}>↙ {percent}</Text>

    return (
        //these part should be updated
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
    )
}
