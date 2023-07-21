import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPIWallets, fetchDBWallets, fetchWallet, setFavorite, changeCurrencyRequest } from './api';

type Props = {
  account: string;
  isFavorite: boolean;
};

type PropsCurrency = {
  account: string;
  amount: number;
  currency: string;
};

export const getWalletsAPI = createAsyncThunk("GET_WALLETS_API", fetchAPIWallets)
export const getWalletsDB = createAsyncThunk('GET_WALLETS_DB', fetchDBWallets);
export const setIsFavorite = createAsyncThunk('SET_FAVORITE', (values: Props) =>
  setFavorite(values.account, values.isFavorite)
);
export const getSelectedWallet = createAsyncThunk('GET_WALLET', fetchWallet);
export const changeCurrency = createAsyncThunk('CHANGE_CURRENCY', (values: PropsCurrency) =>
  changeCurrencyRequest(values.account, values.amount, values.currency)
);


