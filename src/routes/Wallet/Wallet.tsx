/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from 'react-router-dom';
import { MuiContainer, MuiBox, CardContainer, MuiWrapper } from './styles';
import TransactionCard from '../../components/transaction-card';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import Button from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { getTransactionsAPI, getTransactionsDB, isLoadingSelector, transactionSelector } from '../../store/transaction';
import { getSelectedWallet, selectedWalletSelector } from '../../store/wallet';
import CircularProgress from '@mui/material/CircularProgress';
import { checkIfItsOld } from '../../helpers';
import ExchangeCalculator from '../../components/exchange-calculator';
import EditIcon from '@mui/icons-material/Edit';

function Wallet() {
  const { state } = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const transactions = useSelector(transactionSelector)
  const wallet = useSelector(selectedWalletSelector)
  const isLoading = useSelector(isLoadingSelector)

  useEffect(() => {
    dispatch(getSelectedWallet(state))
    dispatch(getTransactionsDB(state));
  }, [dispatch]);

  const handleFetch = () => {
    dispatch(getTransactionsAPI(state))
    return dispatch(getTransactionsDB(state));
  }

    if (isLoading) {
      return (
        <MuiContainer>
          <CircularProgress />
        </MuiContainer>
      );
    }

  const handleStatus = () => {
    const isOld = checkIfItsOld(transactions[0]?.date)
    if(isOld) return <Typography sx={{color:"red"}}>Status: Old</Typography>;
    return <Typography sx={{ color: 'green' }}>Status: New</Typography>;
  }

  return (
    <MuiContainer>
      <Box>
        {transactions?.length === 0 && <Button callback={handleFetch} text="Fetch Transactions" />}
        <Typography paddingBottom={1}>Account Details:</Typography>
        <MuiWrapper>
          <CardContainer>
            <Link to={"/wallet/edit"} state={state}>
              <Box top={'12px'} right={'12px'} position={'absolute'}>
                <EditIcon />
              </Box>
            </Link>
            <Typography>Balance: {wallet.balance}</Typography>
            <Typography>Currency: {wallet.currency}</Typography>
            {handleStatus()}
          </CardContainer>
          <ExchangeCalculator />
        </MuiWrapper>
        <MuiBox>
          <Typography paddingBottom={1}>Transactions:</Typography>
          <MuiBox>
            {transactions?.map((item, index) => {
              return <TransactionCard date={item.date} from={item.from} to={item.to} value={item.value} key={index} />;
            })}
          </MuiBox>
        </MuiBox>
      </Box>
    </MuiContainer>
  );
}

export default Wallet;
