import { Box, Typography } from "@mui/material";
import { CardContainer, MuiBox, MuiBoxDots } from "./styles"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from "react-redux";
import { setIsFavorite } from "../../store/wallet";
import { AppDispatch } from "../../store/store";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import { Currencies } from "../../enum";


type Props = {
  balance: number;
  index: string;
  isFavorite: boolean;
  account: string;
  currency: Currencies;
};

const WalletCard = ({ balance, index, isFavorite, account, currency }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <CardContainer>
      <Box>
        <MuiBox>
          <Typography>
            Wallet-{index} {currency}
          </Typography>
        </MuiBox>
        <MuiBox>
          <Typography>Total balance:</Typography>
          <Typography paddingLeft={1}>{balance}</Typography>
        </MuiBox>
      </Box>
      <MuiBoxDots>
        <Box
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              setIsFavorite({
                account,
                isFavorite: !isFavorite,
              })
            );
          }}
        >
          {isFavorite ? <StarIcon color="primary" /> : <StarBorderOutlinedIcon />}
        </Box>
        <Box>
          <MoreHorizIcon />
        </Box>
      </MuiBoxDots>
    </CardContainer>
  );
};

export default WalletCard