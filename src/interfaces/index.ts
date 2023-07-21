import { Currencies } from "../enum";

export interface Transaction {
  date: string;
  from: string;
  to: string;
  value: number;
}

export interface Wallet {
  balance: number;
  account: string;
  isFavorite: boolean;
  currency: Currencies;
}

export interface Error {
  message?: string;
  name?: string;
  stack?: string;
}