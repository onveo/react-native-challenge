import { ADDCOIN } from '../actiontypes/actionTypes';

const initialState = {
    coins: [],
};

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCOIN:
            return { coins: [...state.coins, action.payload] };
        // case REMOVE_COIN: 
        //    return{coins: state.coins.filter(eachCoin=>eachCoin.id!== action.payload)}
        default:
            return state;
    }
};