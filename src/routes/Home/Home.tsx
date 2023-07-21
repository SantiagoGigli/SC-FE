import { useDispatch, useSelector } from "react-redux";
import { getWalletsAPI, getWalletsDB, isLoadingSelector, walletDBSelector } from "../../store/wallet";
import { AppDispatch } from "../../store/store";
import { useEffect, useState } from "react";
import WalletCard from "../../components/wallet-card";
import { MuiContainer } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import CircularProgress from '@mui/material/CircularProgress';
import { Wallet } from "../../interfaces";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { selectOptions } from "../../const";
import { Typography } from "@mui/material";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const walletsDB: Wallet[] = useSelector(walletDBSelector);
  const isLoading = useSelector(isLoadingSelector)
  const [filterValue, setFilterValue] = useState<string>("noFilter");

  useEffect(() => {
    dispatch(getWalletsDB());
  }, [dispatch]);

  const handleFetch = () => {
    dispatch(getWalletsAPI());
  }

  const handleMap = () => {
    let walletsToRender: Wallet[] = [];

    if (filterValue === 'favorites') {
      walletsToRender = [...walletsDB].sort((a, b) => {
        if (a.isFavorite && !b.isFavorite) {
          return -1;
        } else if (b.isFavorite && !a.isFavorite) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      walletsToRender = [...walletsDB];
    }

    return walletsToRender.map((wallet, index) => (
      <Link key={index} state={wallet.account} to="/wallet">
        <WalletCard
          key={index}
          currency={wallet.currency}
          account={wallet.account}
          balance={wallet.balance}
          index={wallet.account.slice(0, 4)}
          isFavorite={wallet.isFavorite}
        />
      </Link>
    ));
  };

  const handleChange = (event: SelectChangeEvent) => {
      setFilterValue(event.target.value as string);
    };

  if(isLoading) {
    return (
      <MuiContainer>
        <CircularProgress />
      </MuiContainer>
    )
    }

  return (
    <MuiContainer>
      {walletsDB?.length === 0 && <Button callback={handleFetch} text="Fetch Wallets" />}
      <Typography paddingBottom={3}>Wallets:</Typography>
      {walletsDB?.length > 0 && (
        <Select
          labelId="select-label"
          id="select"
          value={filterValue}
          label="Order By"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {selectOptions.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      )}
      {handleMap()}
    </MuiContainer>
  );
}

export default Home;
