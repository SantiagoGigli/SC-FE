import { createReducer } from "@reduxjs/toolkit";
import { Error, Transaction } from "../../interfaces";
import { getTransactionsDB } from "./actions";

interface TransactionReducer {
  transactions: Transaction[];
  error: Error;
  isLoading: boolean;
}

export const transactionReducer = createReducer<TransactionReducer>(
  {
    transactions: [],
    error: {
      message: '',
      name: '',
      stack: '',
    },
    isLoading: false,
  },
  (builder) => {
    builder.addCase(getTransactionsDB.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTransactionsDB.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(getTransactionsDB.fulfilled, (state, action) => {
      state.isLoading = false;
      state.transactions = action.payload;
    });
  }
);