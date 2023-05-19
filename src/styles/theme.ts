import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    primary: {
      main: '#6b1fae',
    },
    secondary: {
      main: '#01ca7d',
    },
    text: {
      primary: '#333333',
      secondary: '#ffffff',
    },
    background: {
      default: '#f1f1f1',
    },
    grey: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
    },
  },
  typography: {
    fontFamily: 'proxima nova, sans-serif',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#01ca7d',
          border: 'none',
          borderRadius: 4,
          color: '#fff',
          cursor: 'pointer',
          display: 'inline-block',
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.5,
          margin: 0,
          textTransform: 'none',
          padding: '8px 12px',
          textAlign: 'center',
          textDecoration: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          verticalAlign: 'middle',
          whiteSpace: 'nowrap',
          transition: 'all 0.3s ease-in-out',
          '&:hover, focus, active': {
            backgroundColor: '#01a76d',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          padding: 0,
          height: 40,
          borderRadius: 50,
        },
        track: {
          zIndex: 1,
        },
        thumb: {
          width: 60,
          height: 60,
          zIndex: 2,
          border: '2px solid #fff',
        },
        rail: {
          backgroundColor: '#fff',
          border: '1px solid #333333',
        },
        mark: {
          display: 'none',
        },
        markLabel: {
          display: 'none',
        },
        valueLabelCircle: {
          position: 'relative',
          backgroundColor: '#6b1fae',
        },
        valueLabel: {
          fontWeight: 700,
          fontSize: 14,
          zIndex: 1,
          position: 'absolute',
          backgroundColor: '#6b1fae',
          color: '#ffffff',
          border: 'transparent',
          padding: '4px 10px',
          right: 60,
          top: 42,
          borderRadius: 10,
          '&::before': {
            content: 'none',
          },
        },
      },
    },
  },
});
