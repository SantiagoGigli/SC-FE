import { Currencies } from "../enum";

type Props = {
    value: string;
    name: string;
}

type PropsCurrency = {
    value: string;
    name: Currencies
};

type PropOptions = {
  [key: string]: string;
};

export const selectOptions: Props[] = [
    {value: "noFilter", name: "No Filter"},
    {value: "favorites", name: "Favorites"}
]

export const currencyOptions: PropsCurrency[] = [
    { value: 'ethereum', name: Currencies.ETH },
    { value: 'usd', name: Currencies.USD },
    { value: "eur", name: Currencies.EUR },
];

export const currencyOptionsObject: PropOptions = {
  ETH: 'ethereum',
  USD: 'usd',
  EUR: 'eur',
};
