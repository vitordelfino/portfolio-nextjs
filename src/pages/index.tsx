import { Flex, Center } from '@chakra-ui/react';
import HomePage from '../components/Home';
import Header from '../components/Header';
import InternetBankingFront from '../components/InternetBankingFront';
import Timeline from '../components/Timeline';

export default function Home(): JSX.Element {
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Center
        position="fixed"
        style={{
          backdropFilter: 'blur(8px)',
        }}
        top="0"
        w="100%"
        zIndex="1"
        background="rgba(23, 25, 35, 0.9)"
        p={5}
      >
        <Header />
      </Center>
      <HomePage />
      <InternetBankingFront />
      <Timeline />
    </Flex>
  );
}
