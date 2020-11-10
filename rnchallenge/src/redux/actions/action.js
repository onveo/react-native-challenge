import { ADDCOIN, REMOVECOIN, UPDATECOIN } from '../actiontypes/actionTypes';

//action to add coins to list
export const addCoins = (coindata) => {
  return {
    type: ADDCOIN,
    payload: coindata
  }
};

//remove action to remove selected coins from the list
export const removeCoins = (coindata) => {
  return {
    type: REMOVECOIN,
    payload: coindata
  }
};

//update action to update added coins
export const updateCoins = (updatedCoinData) => {
  return {
    type: UPDATECOIN,
    payload: updatedCoinData,
  }
}