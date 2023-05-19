import React from 'react';
import { ISliderProps } from '../../../types/global';
import { yearMarks } from '../../../utils/yearmarks';

// Material UI
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';

const YearSlider: React.FC<ISliderProps> = ({
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
      onChangeCommitted={handleCommitChange}
      onChange={handleSliderChange}
    />
  );
};

export default YearSlider;
