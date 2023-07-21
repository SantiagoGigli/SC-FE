import { RootState } from './../store';
import { createSelector } from "@reduxjs/toolkit"

export const transactionsData = (state: RootState) => state.transaction

export const isLoadingSelector = createSelector([transactionsData], (values) => values.isLoading);
export const transactionSelector = createSelector([transactionsData], (values) => values.transactions);