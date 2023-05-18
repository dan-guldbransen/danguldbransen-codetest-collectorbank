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
          height: 50,
          borderRadius: 50,
        },
        thumb: {
          position: 'relative',
          width: 55,
          height: 55,
          border: '1px solid #fff',
        },
        rail: {
          backgroundColor: '#fff',
          border: '1px solid #333333',
        },
        markLabel: {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 0,
          marginLeft: 20,
          color: '#fff',
          fontSize: '12px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
  },
});
