
//this is kind of header button to go back to main(list) page

import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <View style={{ position: 'absolute', left: 5, top: 50 }}>
            <Button
                color='#375774'
                title='< Back to list'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default BackButton
