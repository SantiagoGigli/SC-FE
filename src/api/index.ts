import axios from 'axios';

const BASE_SETTINGS = {
  timeout: 0,
  headers: {
    'content-type': 'application/json',
  },
  baseURL: 'http://localhost:5000',
};

export const api = axios.create({
  ...BASE_SETTINGS,
});

export const URL = {
  //WALLET
  DEFAULT_WALLET: '/wallet',
  GET_API_WALLETS: '/wallet/api',
  SET_FAVORITE: '/wallet/favorite/',
  GET_WALLET: '/wallet/',
  CHANGE_CURRENCY: "/wallet/changeCurrency/",
  //TRANSACTION
  GET_API_TRANSACTIONS: '/transaction/api/',
  GET_TRANSACTIONS: '/transaction/',
};
