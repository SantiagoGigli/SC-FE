import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';

export const CardContainer = styled(CardActionArea)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '16px 32px',
  boxShadow: '0px 4px 8px 0px #0000001A',
  margin: '15px',
  '&:hover': {
    boxShadow: '0px 8px 16px 0px #00000033',
  },
}));
