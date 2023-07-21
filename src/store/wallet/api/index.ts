import { URL, api } from "../../../api"

export const fetchAPIWallets = async () => {
  const response = await api.get(URL.GET_API_WALLETS);

  if(!response) throw new Error("Wallets not found")

  return response.data
}

export const fetchDBWallets = async () => {
  const response = await api.get(URL.DEFAULT_WALLET);

  if (!response) throw new Error('Wallets not found');

  return response.data;
};


export const setFavorite = async (address: string, isFavorite: boolean) => {
  const response = await api.patch(`${URL.SET_FAVORITE}${address}`, {isFavorite});

  if (!response) throw new Error('Can not set as favorite');

  return response.data;
};

export const fetchWallet = async (address: string) => {
  const response = await api.get(`${URL.GET_WALLET}${address}`);

  if (!response) throw new Error('Wallets not found');

  return response.data;
};

export const changeCurrencyRequest = async (address: string, amount: number, currency: string) => {
  const response = await api.put(`${URL.CHANGE_CURRENCY}${address}`, { amount, currency });

  if (!response) throw new Error('Currency not changed');

  return response.data;
};