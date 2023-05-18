import React, { useState } from 'react';
import './styles.css';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, onChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  const calculateBackground = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #6b1fae 0%, #6b1fae ${percentage}%, #ffffff ${percentage}%, #ffffff 100%)`;
  };

  return (
    <div className='slider-container'>
      <input
        style={{
          background: calculateBackground(),
        }}
        className='slider'
        aria-label='Lånebelopp'
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <span
        style={{
          position: 'absolute',
          left: `${((value - min) / (max - min)) * 100}%`,
          color: '#ffffff',
          fontSize: '14px',
          background: '#ffffff',
          zIndex: 2,
        }}
      >
        {value}
      </span>
    </div>
  );
};
export default Slider;
