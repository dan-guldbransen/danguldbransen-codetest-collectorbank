import React from 'react';
import Header from './components/header';
import Sliders from './components/sliders';
import ApplyButton from './components/applybutton';

// Material UI
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const App: React.FC = () => {
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
  };

  return (
    <Box sx={styles.container}>
      <Header />
      <Sliders />
      <ApplyButton amount={0} months={0} />
    </Box>
  );
};

export default App;
