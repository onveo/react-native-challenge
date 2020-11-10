import { StyleSheet, Dimensions } from 'react-native'

const a = Dimensions.get('window').width
const b = Dimensions.get('window').height

export const SearchStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        left: -(a / 5) / 2,
        marginTop: b / 4,
        fontSize: 25,
        margin: 20
    },
    textinput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        width: a - (a / 5),
        fontSize: 20,
        borderRadius: 5,
        padding: 10,
    },
    separator: {

        width: 300,
        marginHorizontal: 50,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});