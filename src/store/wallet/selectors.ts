import { RootState } from './../store';
import { createSelector } from "@reduxjs/toolkit"

export const walletData = (state: RootState) => state.wallet

export const isLoadingSelector = createSelector([walletData], (values) => values.isLoading);
export const walletDBSelector = createSelector([walletData], (values) => values.wallets);
export const selectedWalletSelector = createSelector([walletData],
    (values) => values.selectedWallet);
