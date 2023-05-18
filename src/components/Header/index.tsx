import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
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
    costCalculated: {
      fontSize: '18px',
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

  return (
    <Box sx={styles.headerContainer}>
      <Typography variant='h1' sx={styles.headerText}>
        Lånekalkyl
      </Typography>
      <Box sx={styles.costContainer}>
        <Box sx={styles.costBox}>
          <Typography variant='h2' sx={styles.costCalculated}>
            Exempel på månadskostnad
          </Typography>
          <Typography variant='h2' sx={styles.costCalculated}>
            10 000 SEK / mån
          </Typography>
          <Box sx={styles.costArrow} />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
