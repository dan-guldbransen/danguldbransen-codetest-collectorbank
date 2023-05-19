import React, { useState } from 'react';
import Header from './components/header';
import Sliders from './components/sliders';
import ApplyButton from './components/applybutton';

// Material UI
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface IAppProps {
  yearsInterest: number;
  monthlyInterest: number;
}

const App: React.FC<IAppProps> = ({ yearsInterest, monthlyInterest }) => {
  const theme = useTheme();
  const [years, setYears] = useState<number>(6);
  const [amount, setAmount] = useState<number>(110000);

  const handleOnYearsChangeCommitted = (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | Array<number>
  ) => {
    setYears(value as number);
  };

  const handleOnAmountChangeCommitted = (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | Array<number>
  ) => {
    setAmount(value as number);
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
      <Header
        years={years}
        amount={amount}
        yearsInterest={yearsInterest}
        monthlyInterest={monthlyInterest}
      />
      <Sliders
        handleOnYearsChangeCommitted={handleOnYearsChangeCommitted}
        handleOnAmountChangeCommitted={handleOnAmountChangeCommitted}
      />
      <ApplyButton amount={amount} months={0} />
    </Box>
  );
};

export default App;
