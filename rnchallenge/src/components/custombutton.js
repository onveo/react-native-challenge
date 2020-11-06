import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import LoadCoin from '../services/api'
import { useDispatch } from 'react-redux';
import { addCoins } from '../redux/actions/action'


const CustonButton = (props) => {
    const dispatch = useDispatch();
    LoadCoin = () => {
        fetch(`https://data.messari.io/api/v1/assets/${props.texter}/metrics`, {
            method: 'GET'

        })

            .then((response) => response.json())
            .then((responseData) => {
                const coindata = responseData.data
                dispatch(addCoins(coindata))
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    return (
        <TouchableOpacity style={{ height: 50, width: 130, backgroundColor: '#FCD25A', alignItems: 'center', justifyContent: 'center', margin: 10 }} onPress={() => LoadCoin(props.texter)}>
            <Text style={{ color: '#375774', fontSize: 25 }}>Add</Text>
        </TouchableOpacity>
    )
}

export default CustonButton
