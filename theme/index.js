import {createMuiTheme} from '@material-ui/core/styles';

import {colors} from './colors';
import {fonts} from './fonts';

const theme = createMuiTheme({
  colors,
  fonts,
  spacing: 8,
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    error: colors.error
  },
  typography: {
    fontFamily: 'Montserrat, Roboto',
  },

  overrides: {
    MuiButton: {
      label:{
        textTransform: 'none',
      }
    },
  }
});

export default theme;
