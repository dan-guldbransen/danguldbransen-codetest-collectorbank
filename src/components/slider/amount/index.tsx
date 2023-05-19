import React from 'react';
import { Slider, Stack, Typography, useTheme } from '@mui/material';

const amountMarks = [
  {
    value: 20000,
    label: '20 000 kr',
  },
  {
    value: 30000,
    label: '30 000 kr',
  },
  {
    value: 40000,
    label: '40 000 kr',
  },
  {
    value: 50000,
    label: '50 000 kr',
  },
  {
    value: 60000,
    label: '60 000 kr',
  },
  {
    value: 70000,
    label: '70 000 kr',
  },
  {
    value: 80000,
    label: '80 000 kr',
  },
  {
    value: 90000,
    label: '90 000 kr',
  },
  {
    value: 100000,
    label: '100 000 kr',
  },
  {
    value: 110000,
    label: '110 000 kr',
  },
  {
    value: 120000,
    label: '120 000 kr',
  },
  {
    value: 130000,
    label: '130 000 kr',
  },
  {
    value: 140000,
    label: '140 000 kr',
  },
  {
    value: 150000,
    label: '150 000 kr',
  },
  {
    value: 160000,
    label: '160 000 kr',
  },
  {
    value: 170000,
    label: '170 000 kr',
  },
  {
    value: 180000,
    label: '180 000 kr',
  },
  {
    value: 190000,
    label: '190 000 kr',
  },
  {
    value: 200000,
    label: '200 000 kr',
  },
];

const AmountSlider = () => {
  const theme = useTheme();

  const styles = {
    slider: {
      color: `${theme.palette.primary.main}`,
      backgroundColor: `${theme.palette.common.white}`,
      border: `1px solid ${theme.palette.grey[300]}`,
    },
  };

  const formatValueLabel = (value: number) => {
    return `${value} kr`;
  };

  return (
    <>
      <Slider
        sx={styles.slider}
        aria-label='loan amount'
        defaultValue={20000}
        track={'normal'}
        min={20000}
        max={200000}
        valueLabelDisplay='on'
        valueLabelFormat={formatValueLabel}
        step={null}
        marks={amountMarks}
      />
    </>
  );
};

export default AmountSlider;
