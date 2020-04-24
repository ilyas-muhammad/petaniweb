import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    background: {
      default: '#121212',
    },
    primary: {
      main: '#F5802E',
    },
    secondary: {
      main: '#383838',
    },
    text: {
      primary: 'rgba(255, 255, 255,0.6)',
      secondary: '#F5802E',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
