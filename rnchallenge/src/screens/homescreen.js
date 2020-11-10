
/*
    this page is the main page for now. it should be cleared from components as much as possible

*/

import React, { useEffect } from 'react'
import { View, Button, FlatList, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';


import { Item } from '../components/itemcomponent'
import { HomeStyles } from '../styles/homestyles'
import { updateCoins } from '../redux/actions/action'


const b = Dimensions.get('window').height

const HomeScreen = ({ navigation }) => {

    const coins = useSelector(state => state.coins);
    const dispatch = useDispatch();
    //we are sending props to ıtem component in forms that we need there
    //dont change if you dont know what you are doing
    const renderItem = ({ item }) => {
        return <Item title={item.name}
            price={convertToCurrency(item.market_data.price_usd)}
            symbol={item.symbol} id={item.id}
            percent={convertToCurrency(item.market_data.percent_change_usd_last_24_hours)} />
    };

    useEffect(() => {
        //this works for updating elements in every 5 seconds
        const updateInterval = setInterval(() => {
            coins.forEach(element => {
                fetch(`https://data.messari.io/api/v1/assets/${element.symbol}/metrics`, {
                    method: 'GET'
                })
                    .then((response) => response.json())
                    .then((responseData) => {

                        if (!responseData.status.error_code) {
                            const updatedCoinData = responseData.data
                            //sending data to redux action
                            dispatch(updateCoins(updatedCoinData))

                        } else {
                            //handle error
                            //we need to figure out handling errors in better way
                            //   console.log("not found")
                        }

                    })
                    .catch((error) => {
                        console.warn(error);
                    });
            });
        }, 5000);
        return () => clearInterval(updateInterval)
    })

    return (
        //we have conditional render here at Flatlist component
        <View style={HomeStyles.container}>
            {coins && <FlatList
                data={coins}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ height: b - (b / 3), marginTop: 15 }}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
            />}

            <Button
                color='#375774'
                title='+ Add a Cryptocurrency'
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    )
}

//this function prepares prices and percent change of coins to better forms
const convertToCurrency = (num) => {
    return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


export default HomeScreen
