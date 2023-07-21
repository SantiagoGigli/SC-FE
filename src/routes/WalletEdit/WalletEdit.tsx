/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import { CardContainer, MuiContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect, useState } from "react";
import { changeCurrency, getSelectedWallet, selectedWalletSelector } from "../../store/wallet";
import { Box, Button, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { currencyOptions } from "../../const";
import { convertCurrency } from "../../helpers";

const WalletEdit = () => {
  const { state } = useLocation();
  const dispatch = useDispatch<AppDispatch>()
  const wallet = useSelector(selectedWalletSelector);
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [currentCurrency, setCurrentCurrency] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
      setFilterValue(event.target.value as string);
  };

  useEffect(() => {
    dispatch(getSelectedWallet(state));
  }, [dispatch]);

  const handleOnClick = async() => {
    const response = await convertCurrency(wallet.currency, filterValue, wallet.balance);
    setCurrentCurrency(filterValue.toUpperCase().slice(0,3));
    return setAmount(response)
  }

  const handleOnSave = async () => {
    dispatch(changeCurrency({account: state.toString(), amount, currency: currentCurrency}));
    navigate("/")
  };

  return (
    <MuiContainer>
      <Box flexDirection={"column"}>
        <CardContainer>
          <Typography>Balance: {amount || wallet.balance}</Typography>
          <Typography>Currency: {currentCurrency || wallet.currency}</Typography>
          <Box>
            <Select
              sx={{ marginTop: '15px', marginRight: '15px' }}
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
            {filterValue && (
              <Button onClick={handleOnClick} component="span">
                Change
              </Button>
            )}
          </Box>
        </CardContainer>
        {!!amount && (
          <Box>
            <Button onClick={handleOnSave} component="span">
              Save
            </Button>
          </Box>
        )}
      </Box>
    </MuiContainer>
  );
}

export default WalletEdit