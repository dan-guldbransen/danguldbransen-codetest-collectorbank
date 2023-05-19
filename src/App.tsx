import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './components/header';
import YearSlider from './components/slider/years';
import AmountSlider from './components/slider/amount';

const App = () => {
  const theme = useTheme();
  const [amount, setAmount] = useState(20000);
  const [years, setYears] = useState(2);

  const styles = {
    container: {
      position: 'relative',
      display: 'block',
      margin: 'auto',
      height: '100%',
      padding: '51px 64px 52px 64px',
      maxWidth: 800,
      backgroundColor: `${theme.palette.common.white}`,
    },

    subheader: {
      fontSize: '16px',
      marginBottom: '14px',
      fontWeight: 700,
      color: `${theme.palette.grey[700]}`,
    },
    buttonWrapper: {
      paddingTop: '24px',
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
    },
    sliderBox: {
      width: '100%',
      position: 'relative',
    },
    placeHolder: {
      position: 'absolute',
      fontSize: '14px',
      top: '10px',
      right: '10px',
      zIndex: 1,
      color: `${theme.palette.grey[500]}`,
    },
  };

  return (
    <Box sx={styles.container}>
      <Header />
      <Typography variant='h2' sx={styles.subheader}>
        Lånebelopp
      </Typography>
      <Box sx={styles.sliderBox}>
        <Stack sx={styles.placeHolder}>200 000 kr</Stack>
        <AmountSlider />
      </Box>
      <Typography variant='h2' sx={styles.subheader}>
        Återbetalningstid
      </Typography>
      <Box sx={styles.sliderBox}>
        <Stack sx={styles.placeHolder}>10 år</Stack>
        <YearSlider />
      </Box>
      <Box sx={styles.buttonWrapper}>
        <Button component='button'>Till ansökan</Button>
      </Box>
    </Box>
  );
};

export default App;
