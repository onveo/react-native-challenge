import { ADDCOIN } from '../actiontypes/actionTypes';

const initialState = {
    coins: [],
};

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCOIN:
            //searching to see if new object already inside coins, it returns true if it is, returns if its not 
            const isCoinExist = state.coins.find(eachCoin => eachCoin.id === action.payload.id)
            if (isCoinExist) {
                alert("Already exist, trt another one!")
                return state
            }
            else {
                alert('Added, please check the list!')
                return { coins: [...state.coins, action.payload] };
            }
     //in future versions we can add remove function, this function is only to try, dont care about it
        // case REMOVE_COIN: 
        //    return{coins: state.coins.filter(eachCoin=>eachCoin.id!== action.payload)}
        default:
            return state;
    }
};