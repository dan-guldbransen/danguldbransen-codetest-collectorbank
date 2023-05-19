import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

interface IHeaderProps {
  years: number;
  amount: number;
  yearsInterest: number;
  monthlyInterest: number;
}

const Header: React.FC<IHeaderProps> = ({ years, amount }) => {
  const theme = useTheme();

  const styles = {
    headerContainer: {
      width: '100%',
      display: 'grid',
      alignItems: 'center',
      marginBottom: '32px',
      gridTemplateColumns: '1fr 1fr',
    },
    headerText: {
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: '32px',
    },
    costContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    costBox: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '32px 16px',
      width: '330px',
      borderRadius: '4px',
      backgroundColor: `${theme.palette.primary.main}`,
      zIndex: 0,
    },
    costText: {
      fontSize: '16px',
      marginBottom: '8px',
      fontWeight: 700,
      color: `${theme.palette.common.white}`,
    },
    costCalculated: {
      fontSize: '20px',
      marginBottom: '8px',
      marginRight: '4px',
      fontWeight: 700,
      color: `${theme.palette.common.white}`,
    },
    perMonth: {
      fontSize: '16px',
      marginBottom: '8px',
      fontWeight: 700,
      color: `${theme.palette.common.white}`,
    },
    costArrow: {
      position: 'absolute',
      bottom: -30,
      left: 50,
      height: 0,
      zIndex: -1,
      borderTop: '60px solid transparent',
      borderBottom: '60px solid transparent',
      borderLeft: `60px solid ${theme.palette.primary.main}`,
    },
  };

  const yearsInterest = 9.9;
  const monthlyInterest = 0.00825;

  return (
    <Box sx={styles.headerContainer}>
      <Typography variant='h1' sx={styles.headerText}>
        Lånekalkyl
      </Typography>
      <Box sx={styles.costContainer}>
        <Box sx={styles.costBox}>
          <Typography variant='h2' sx={styles.costText}>
            Exempel på månadskostnad
          </Typography>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h2' sx={styles.costCalculated}>
              {(
                (amount *
                  monthlyInterest *
                  (1 + monthlyInterest) ** (yearsInterest * 12)) /
                ((1 + monthlyInterest) ** (years * 12) - 1)
              ).toFixed(0)}
            </Typography>
            <Typography variant='h2' sx={styles.perMonth}>
              kr / mån
            </Typography>
          </Stack>
          <Box sx={styles.costArrow} />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
