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
      primary: '#707070',
      secondary: '#707070',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
