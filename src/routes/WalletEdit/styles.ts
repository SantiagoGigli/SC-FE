import { styled } from '@mui/material/styles';
import { Box, CardActionArea } from '@mui/material';

export const MuiContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  alignContent: 'center',
  padding: '1%',
}));

export const CardContainer = styled(CardActionArea)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  width: '350px',
  padding: '16px 32px',
  boxShadow: '0px 4px 8px 0px #0000001A',
  margin: '15px',
  '&:hover': {
    boxShadow: '0px 8px 16px 0px #00000033',
  },
}));
