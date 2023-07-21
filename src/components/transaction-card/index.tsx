import {  Typography } from "@mui/material";
import { CardContainer } from "./styles"

type Props = {
  from: string;
  to: string;
  value: number;
  date: string;
};

const TransactionCard = ({ from, to, value, date }: Props) => {
  return (
    <CardContainer>
      <Typography>From: {from}</Typography>
      <Typography>To: {to}</Typography>
      <Typography>Value: {value}</Typography>
      <Typography>Date: {date}</Typography>
    </CardContainer>
  );
};

export default TransactionCard;