import {  StyleSheet, Dimensions } from 'react-native'

const a = Dimensions.get('window').width
const b = Dimensions.get('window').height

export const HomeStyles = StyleSheet.create({
    container:{
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})
