import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import * as All from '../assets/index'

export const Item = ({ title, symbol, name, percent, price }) => (
    <View >
        <View style={{ flexDirection: 'row',  alignItems:'center',margin:10 }}>
            <Image style={{ height: 40, width: 40 }} source={All[`${symbol}`]} />
            <View style={{margin:10}}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>{title}</Text>
                <Text>{symbol}</Text>
            </View>
            <Text style={styles.title}>{price}</Text>
        </View>
       
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
