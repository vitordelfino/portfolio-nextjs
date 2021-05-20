import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Aos from 'aos';

import { useEffect, useRef } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from '../styles/theme';
// import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // return <Component {...pageProps} />;
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: 'mobile',
    });
    window.addEventListener('load', Aos.refresh);
  }, []);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClientRef.current}>
        <ReactQueryDevtools
          initialIsOpen={process.env.NODE_ENV === 'development'}
        />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
