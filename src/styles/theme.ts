// theme.ts
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: '#333333',
    background: '#f0f3f9',
    buttonGreen: '#01ca7d',
    buttonGreenHover: '#01a76d',
    purple: '#6b1fae',
  },

  fonts: {
    primary: 'font-family: proxima nova, sans-serif',
  },

  fontSizes: {
    mini: '0.5rem', // 8px
    xs: '0.75rem', // 12px
    s: '1rem', // 16px
    m: '1.1rem', // 18px
    l: '1.5rem', // 24px
    xl: '3rem', // 48px
  },

  breakpoints: {
    sm: '480px',
  },
};
