import React, { useState } from 'react'
import { View, Text, TextInput, Dimensions } from 'react-native'

import AddButton from '../components/addbutton'
import { SearchStyles } from '../styles/searchstyle'
import BackButton from '../components/backbutton'

const a = Dimensions.get('window').width

const Searchscreen = () => {
    const [value, onChangeText] = useState();
    return (<>
        <View style={SearchStyles.container}>
            <BackButton/>
            <Text style={SearchStyles.text}>
                Add a Crytocurrency
            </Text>
            <TextInput
                autoCorrect={false}

                placeholder='  BTC, XRP etc.'
                style={SearchStyles.textinput}
                onChangeText={text => onChangeText(text)}
                value={value}
            />

        </View>
        <View style={{ alignSelf: 'flex-end'}}>
            <AddButton texter={value} />
        </View>
    </>
    )
}

export default Searchscreen
