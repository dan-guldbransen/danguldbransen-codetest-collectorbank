import React from 'react';

// Material UI
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface IApplyButtonProps {
  amount: number;
  years: number;
}

const ApplyButton = ({ amount, years }: IApplyButtonProps) => {
  const theme = useTheme();

  const url = new URL(
    `https://loan-application/?query=amount=${amount}&years=${years}`
  );

  const onClickHandler = () => console.log(url);

  const styles = {
    buttonWrapper: {
      paddingTop: '24px',
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
    },
  };

  return (
    <Box sx={styles.buttonWrapper}>
      <Button component='button' onClick={onClickHandler}>
        Till ansökan
      </Button>
    </Box>
  );
};

export default ApplyButton;
