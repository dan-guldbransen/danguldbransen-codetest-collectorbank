import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 200000,
    label: '20 000 kr',
  },

  {
    value: 200000,
    label: '200 000 kr',
  },
];

const valuetext = (value: number) => {
  return `${value} kr`;
};

const valueLabelFormat = (value: number) => {
  return marks.findIndex((mark) => mark.value === value) + 1;
};

const AmountSlider: React.FC = () => {
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

export default AmountSlider;
