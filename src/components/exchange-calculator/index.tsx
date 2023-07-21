import { Box, Button, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { CardContainer } from './styles';
import { currencyOptions } from '../../const';
import { useState } from 'react';
import { api } from '../../api';

const ExchangeCalculator = () => {
  const [filterValue, setFilterValue] = useState<string>('ethereum');
  const [filterValueTo, setFilterValueTo] = useState<string>('usd');
  const [amount, setAmount] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilterValue(event.target.value as string);
  };

  const handleChangeTo = (event: SelectChangeEvent) => {
    setFilterValueTo(event.target.value as string);
  };

  const handleExchange = async () => {
    try {
      const response = await api.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${filterValue}&vs_currencies=${filterValueTo.slice(0,3)}`
      );
      const value = response.data[filterValue][filterValueTo.slice(0, 3)];
      setAmount(value.toString());
    } catch (error) {
      setAmount('Error can not get exchange');
    }
  };

  return (
    <CardContainer>
      <Typography paddingBottom={2}>Exchange calculator:</Typography>
      <Box>
        <Select
          sx={{ marginLeft: '15px' }}
          labelId="select-from-label"
          id="select-from"
          value={filterValue}
          label="From"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {currencyOptions.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          sx={{ marginLeft: '15px' }}
          labelId="select-to-label"
          id="select-to"
          value={filterValueTo}
          label="To"
          onChange={(e) => {
            handleChangeTo(e);
          }}
        >
          {currencyOptions.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <Button component="span" sx={{ marginLeft: '20px' }} onClick={handleExchange}>
          Go
        </Button>
      </Box>
      <Typography marginTop={2}>Rate: {amount || ' '}</Typography>
    </CardContainer>
  );
};

export default ExchangeCalculator;
