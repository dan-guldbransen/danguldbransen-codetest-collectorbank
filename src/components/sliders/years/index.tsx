import React from 'react';

// Material UI
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';

const yearMarks = [
  {
    value: 2,
    label: '2 år',
  },
  {
    value: 3,
    label: '3 år',
  },
  {
    value: 4,
    label: '4 år',
  },
  {
    value: 5,
    label: '5 år',
  },
  {
    value: 6,
    label: '6 år',
  },
  {
    value: 7,
    label: '7 år',
  },
  {
    value: 8,
    label: '8 år',
  },
  {
    value: 9,
    label: '9 år',
  },
  {
    value: 10,
    label: '10 år',
  },
];

const YearSlider = () => {
  const theme = useTheme();
  const styles = {
    slider: {
      color: `${theme.palette.primary.main}`,
      backgroundColor: `${theme.palette.common.white}`,
      border: `1px solid ${theme.palette.grey[300]}`,
    },
  };

  const formatValueLabel = (value: number) => {
    return `${value} år`;
  };

  return (
    <Slider
      sx={styles.slider}
      aria-label='loan years'
      defaultValue={2}
      min={2}
      max={10}
      valueLabelDisplay='on'
      valueLabelFormat={formatValueLabel}
      step={null}
      marks={yearMarks}
    />
  );
};

export default YearSlider;
