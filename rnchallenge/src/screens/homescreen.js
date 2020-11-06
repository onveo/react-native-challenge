import React, { useEffect } from 'react'
import { View, Text, Button, FlatList, StyleSheet, StatusBar } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { Item } from '../components/itemcomponent'


const HomeScreen = ({ navigation }) => {
    const coins = useSelector(state => state.coins);
    const Separator = () => (
        <View style={styles.separator} />
    );
    const renderItem = ({ item }) => {
        return <Item title={item.name} price={convertToCurrency(item.market_data.price_usd)}
            symbol={item.symbol}
            percent={item.percent_change_usd_last_24_hours} />
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {coins && <FlatList
                data={coins}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ height: 700 }}
                contentContainerStyle={{ flexGrow: 1 }}
                ItemSeparatorComponent={Separator}
            />}
            <Button
                color='black'
                title='load some coins'
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    separator: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

const convertToCurrency = (num) => {
    return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
export default HomeScreen


// const AddCoinsButton = () => {
//     return (
//         <Button
//             style={{}}
//             title='load some coins'
//             onPress={() => navigation.navigate('Search')}
//         />
//     )
// }