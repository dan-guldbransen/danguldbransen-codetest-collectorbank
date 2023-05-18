import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 2,
    label: '2 år',
  },

  {
    value: 10,
    label: '10 år',
  },
];

const valuetext = (value: number) => {
  return `${value} år`;
};

const valueLabelFormat = (value: number) => {
  return marks.findIndex((mark) => mark.value === value) + 1;
};

const YearSlider: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label='Restricted values'
        defaultValue={20000}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay='auto'
        marks={marks}
      />
    </Box>
  );
};

export default YearSlider;
