import React from 'react';
import { yearMarks } from '../../../utils/yearmarks';

import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';

interface IYearsProps {
  handleOnChangeCommitted: (
    event: React.SyntheticEvent | Event,
    value: number | Array<number>
  ) => void;
}

const YearSlider: React.FC<IYearsProps> = ({ handleOnChangeCommitted }) => {
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
      defaultValue={6}
      min={2}
      max={10}
      valueLabelDisplay='on'
      valueLabelFormat={formatValueLabel}
      step={null}
      marks={yearMarks}
      onChangeCommitted={handleOnChangeCommitted}
    />
  );
};

export default YearSlider;
