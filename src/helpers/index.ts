import { parse, differenceInYears } from 'date-fns';
import { api } from '../api';
import { currencyOptionsObject } from '../const';

export const checkIfItsOld = (date: string) => {
  const parsedGivenDate = parse(date, 'MM/dd/yyyy', new Date());
  const today = new Date();
  const difference = differenceInYears(today, parsedGivenDate);
  return difference >= 1;
};

export const convertCurrency = async (from: string, to:string, amount: number) => {
  try {
    const response = await api.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${currencyOptionsObject[from]}&vs_currencies=${to.slice(0, 3)}`
    );

    const value = response.data[currencyOptionsObject[from]][to.slice(0, 3)];

    return amount * value;
  } catch (error) {
    console.log(error)
    return amount
  }
}