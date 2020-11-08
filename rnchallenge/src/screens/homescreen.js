import React from 'react'
import { View, Button, FlatList, Dimensions } from 'react-native'
import { useSelector } from 'react-redux';


import { Item } from '../components/itemcomponent'
import { HomeStyles } from '../styles/homestyles'

const b = Dimensions.get('window').height

const HomeScreen = ({ navigation }) => {

    const coins = useSelector(state => state.coins);

    const renderItem = ({ item }) => {
        return <Item title={item.name}
            price={convertToCurrency(item.market_data.price_usd)}
            symbol={item.symbol}
            percent={convertToCurrency(item.market_data.percent_change_usd_last_24_hours)} />
    };

    return (
        <View style={HomeStyles.container}>
            {coins && <FlatList
                data={coins}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ height: b-(b/3),marginTop:15 }}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
            />}

            <Button
                color= '#375774'
                title='+ load some coins'
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    )
}


const convertToCurrency = (num) => {
    return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


export default HomeScreen
