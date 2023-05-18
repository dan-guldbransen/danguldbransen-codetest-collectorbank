import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray: string;
      background: string;
      buttonGreen: string;
      buttonGreenHover: string;
      purple: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      mini: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };

    breakpoints: {
      sm: string;
    };
  }
}
