import { createReducer } from "@reduxjs/toolkit";
import {  changeCurrency, getSelectedWallet, getWalletsDB, setIsFavorite } from './actions';
import { Error, Wallet } from "../../interfaces";
import { Currencies } from "../../enum";

interface WalletReducer {
  wallets: Wallet[];
  selectedWallet: Wallet;
  error: Error;
  isLoading: boolean;
}

export const walletReducer = createReducer<WalletReducer>(
  {
    wallets: [],
    selectedWallet: {
      balance: 0,
      account: "",
      isFavorite: false,
      currency: Currencies.ETH
    },
    error: {
      message: "",
      name: "",
      stack: ""
    },
    isLoading: false
  },
  builder => {
    builder.addCase(getWalletsDB.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWalletsDB.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(getWalletsDB.fulfilled, (state, action) => {
      state.isLoading = false;
      state.wallets = action.payload;
    });
    builder.addCase(setIsFavorite.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setIsFavorite.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(setIsFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      state.wallets = action.payload;
    });
    builder.addCase(getSelectedWallet.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSelectedWallet.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(getSelectedWallet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedWallet = action.payload;
    });
    builder.addCase(changeCurrency.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeCurrency.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(changeCurrency.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedWallet = action.payload;
    });
  }
)