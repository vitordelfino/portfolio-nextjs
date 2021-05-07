import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Aos from 'aos';

import { useEffect } from 'react';
import theme from '../styles/theme';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // return <Component {...pageProps} />;
  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: 'mobile',
      // startEvent: 'load',
    });
  }, []);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
