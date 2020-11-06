import React, { useState } from 'react'
import { View, Text, TextInput, Dimensions, Button } from 'react-native'
import CustomButton from '../components/custombutton'

const a = Dimensions.get('window').width
const b = Dimensions.get('window').height

const Searchscreen = () => {
    const [value, onChangeText] = useState();
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginTop: b / 3, fontSize: 35, margin: 20 }}>
                Add a Crytocurrency
            </Text>
            <TextInput
            autoCorrect={false}
                placeholder='BTC, XRP etc.'
                style={{ height: 50, borderWidth: 2, borderColor: '#FCD25A', width: a - (a / 5), fontSize: 20 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <CustomButton texter={value} />
        </View>
    )
}

export default Searchscreen
