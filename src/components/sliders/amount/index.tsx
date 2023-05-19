import React from 'react';
import { ISliderProps } from '../../../types/global';
import { amountMarks } from '../../../utils/amountmarks';

// Material UI
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';

const AmountSlider: React.FC<ISliderProps> = ({
  handleCommitChange,
  handleSliderChange,
}) => {
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
        defaultValue={110000}
        track='normal'
        min={20000}
        max={200000}
        valueLabelDisplay='on'
        valueLabelFormat={formatValueLabel}
        step={null}
        marks={amountMarks}
        onChangeCommitted={handleCommitChange}
        onChange={handleSliderChange}
      />
    </>
  );
};

export default AmountSlider;
