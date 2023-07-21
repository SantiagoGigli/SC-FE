import { styled } from '@mui/material/styles';
import { Box, CardActionArea  } from '@mui/material';

export const CardContainer = styled(CardActionArea)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", 
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  width: '500px',
  padding: '16px 32px',
  boxShadow: '0px 4px 8px 0px #0000001A',
  margin: '15px',
  '&:hover': {
    boxShadow: '0px 8px 16px 0px #00000033',
  },
}));

export const MuiBox = styled(Box)(() => ({
  display: "flex",
  paddingBottom: "5px"
}));

export const MuiBoxDots = styled(Box)(() => ({
  display: 'flex',
  flexDirection: "column",
}));

