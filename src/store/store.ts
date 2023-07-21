import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { walletReducer } from './wallet/reducers';
import { transactionReducer } from './transaction';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    transaction: transactionReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
