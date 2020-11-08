
//addbutton does the request part over the textinput values

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';

import { addCoins } from '../redux/actions/action'
import { AddButtonStyles } from '../styles/componentstyles'


const AddButton = (props) => {
    const dispatch = useDispatch();
    LoadCoin = () => {
        //when we decide to add redux-thunk we will take this function to actions
        //we have a responseve path here to search
        fetch(`https://data.messari.io/api/v1/assets/${props.texter}/metrics`, {
            method: 'GET'

        })

            .then((response) => response.json())
            .then((responseData) => {

                if (!responseData.status.error_code) {
                    const coindata = responseData.data
                    //sending data to redux action
                    dispatch(addCoins(coindata))

                } else {
                    //handle error
                    //we need to figure out handling errors in better way
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
