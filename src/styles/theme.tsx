import { extendTheme } from '@chakra-ui/react';

const fonts = { mono: `'Menlo', monospace` };

// const breakpoints = createBreakpoints({
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em',
// })

const theme = extendTheme({
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'gray.600',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
        // fontFamily: 'Noto Sans JP, sans-serif',
        fontFamily: 'Montserrat, sans-serif',
      },
    },
  },
  fonts,
  // breakpoints,
});

export default theme;
