import React, { useState } from 'react';
import Header from './components/header';
import Sliders from './components/sliders';
import ApplyButton from './components/applybutton';

// Material UI
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  const theme = useTheme();

  const interestCost = (amount: number, months: number) => {
    const interest = 9.9 / 100;
    const monthlyInterest = interest / 12;
    const monthlyCost =
      (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));
    const totalInterest = monthlyCost * months - amount;
    return totalInterest;
  };

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
  };

  return (
    <Box sx={styles.container}>
      <Header />
      <Sliders />
      <ApplyButton />
    </Box>
  );
};

export default App;
