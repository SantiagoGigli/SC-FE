import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const MuiButton = styled(Button)(() => ({
        '&.Mui-disabled': {
          backgroundColor: '#03379A',
          color: '#FFF',
          opacity: 0.6,
        },
        ':hover': {
          backgroundColor: '#03379A',
          opacity: 0.8,
        },
        color: '#FFF',
        fontSize: '18px',
        width: "250px",
        textTransform: 'capitalize',
        borderRadius: '8px',
        backgroundColor: '#03379A',
}));
