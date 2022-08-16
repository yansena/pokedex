import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#996DFF'
    },
    secondary: {
      700: '#FBA94C'
    },
    green: {
      700: '#00875F',
      500: '#00B37E',
      300: '#41D168',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#919191',
      200: '#C4C4CC',
      100: '#E1E1E6',
      50: '#E7E7E8'
    },
    white: '#FFFFFF',
    black: '#272727',
    red: {
      600: '#FA6555'
    },
    blue: {
      600:'#0055D4'
    },
    violet: {
      700:'#6C79DB'
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});