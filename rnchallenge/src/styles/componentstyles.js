import { StyleSheet, Dimensions } from 'react-native'

const a = Dimensions.get('window').width
const b = Dimensions.get('window').height

export const AddButtonStyles = StyleSheet.create({
    container: {
        height: b / 15,
        width: a / 3,
        backgroundColor: '#FCD25A',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: (a / 5) / 2,
        borderRadius: 10,
        margin: b / 40
    },
    text: {
        color: '#375774',
        fontSize: 25
    }
});

export const HomeHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        left:-(a/10)
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        right:-(a/10)

    }
});
export const ItemComponentStyles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'column',
        // width:a
    },
    container: {
        flexDirection: 'row',
        margin: 10,

    },
    titlecontainer: {
        marginRight: 10,
        alignItems: 'flex-start'
    },
    titletext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    pricecontainer: {
        flexDirection: 'column',
        right: 20,
        alignItems: 'flex-end',
        position: 'absolute'
    },
    image: {
        height: 40,
        width: 40,
        marginLeft: 20,
        marginRight:10
    },
    separator: {
        marginVertical: 8,
        width: a-40,
        marginHorizontal: 20,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    deleteBox: {
        backgroundColor: '#EB5757',
        justifyContent: 'center',
        alignItems: 'center',
        width: a/4,
        height: 70,
       
      },
});