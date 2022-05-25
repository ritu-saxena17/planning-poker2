import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      // main: '#1c4182',
      main: '#240a6b',
      light: '#c4a30e',
      // light: '#397fb8',
    },
    text: {
      primary: '#fff',
    },
  },
});

export const AppThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
