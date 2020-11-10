import { ADDCOIN, REMOVECOIN, UPDATECOIN } from '../actiontypes/actionTypes';

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

        case REMOVECOIN:
            return { coins: state.coins.filter(eachCoin => eachCoin.id !== action.payload) }

        case UPDATECOIN:
            const isCoinUpdated = state.coins.find(eachCoin => eachCoin.id === action.payload.id)
            if (isCoinUpdated) {
                const index = state.coins.findIndex((el) => el.id === action.payload.id);
                state.coins[index] = action.payload
                return { coins: [...state.coins] };
            }
            else return {state}

        default:
            return state;
    }
};