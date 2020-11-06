import { ADDCOIN } from '../actiontypes/actionTypes';

export const addCoins = (coindata) => {
  return {
    type: ADDCOIN,
    payload: coindata
  }
};
