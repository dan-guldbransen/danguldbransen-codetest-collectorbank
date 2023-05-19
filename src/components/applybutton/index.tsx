import React from 'react';

// Material UI
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface IApplyButtonProps {
  amount: number;
  months: number;
}

const ApplyButton = ({ amount, months }: IApplyButtonProps) => {
  const theme = useTheme();

  const url = new URL(
    `https://loan-application/?query=amount=${amount}&months=${months}`
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
