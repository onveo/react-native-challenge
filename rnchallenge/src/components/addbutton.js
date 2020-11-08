import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';

import { addCoins } from '../redux/actions/action'
import { AddButtonStyles } from '../styles/componentstyles'


const AddButton = (props) => {
    const dispatch = useDispatch();
    LoadCoin = () => {
        fetch(`https://data.messari.io/api/v1/assets/${props.texter}/metrics`, {
            method: 'GET'

        })

            .then((response) => response.json())
            .then((responseData) => {

                if (!responseData.status.error_code) {
                    const coindata = responseData.data
                    dispatch(addCoins(coindata))

                } else {
                    //handle error
                    console.log("not found")
                }

            })
            .catch((error) => {
                console.warn(error);
            });
    }
    return (
        <TouchableOpacity style={AddButtonStyles.container}  onPress={() => LoadCoin(props.texter)}>
            <Text style={AddButtonStyles.text}>Add</Text>
        </TouchableOpacity>
    )
}

export default AddButton
