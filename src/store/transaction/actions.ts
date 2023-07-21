import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPITransactions, fetchDBTransactions } from "./api";

export const getTransactionsAPI = createAsyncThunk("GET_API_TRANSACTIONS", fetchAPITransactions)
export const getTransactionsDB = createAsyncThunk('GET_TRANSACTIONS', fetchDBTransactions);

