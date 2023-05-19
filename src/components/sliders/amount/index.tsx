import React from 'react';
import { amountMarks } from '../../../utils/amountmarks';

import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';

interface IAmountProps {
  handleOnChangeCommitted: (
    event: React.SyntheticEvent | Event,
    value: number | Array<number>
  ) => void;
}

const AmountSlider: React.FC<IAmountProps> = ({ handleOnChangeCommitted }) => {
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
        onChangeCommitted={handleOnChangeCommitted}
      />
    </>
  );
};

export default AmountSlider;
