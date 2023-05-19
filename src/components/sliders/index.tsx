import React, { useState } from 'react';
import AmountSlider from './amount';
import YearSlider from './years';

// Material UI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Sliders = () => {
  const [amount, setAmount] = useState(20000);
  const [years, setYears] = useState(2);

  const theme = useTheme();

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
    <>
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
    </>
  );
};
export default Sliders;
