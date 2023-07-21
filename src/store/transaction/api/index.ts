import { URL, api } from "../../../api"

export const fetchAPITransactions = async (address: string) => {
  const response = await api.get(`${URL.GET_API_TRANSACTIONS}${address}`);

  if(!response) throw new Error("Transactions not found")

  return response.data
}

export const fetchDBTransactions = async (address: string) => {
  const response = await api.get(`${URL.GET_TRANSACTIONS}${address}`);

  if (!response) throw new Error('Transactions not found');

  return response.data;
};