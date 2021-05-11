import { Center } from '@chakra-ui/react';
import HomePage from '../components/Home';
import InternetBankingFront from '../components/InternetBankingFront';
import Timeline from '../components/Timeline';
import Section from '../components/Section';
import Header from '../components/Header';
import Pokedex from '../components/Pokedex';
import Container from '../components/Container';
import ExpressHandlerErrors from '../components/ExpressHandlerErrors';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Center
        position="fixed"
        style={{
          backdropFilter: 'blur(8px)',
        }}
        top="0"
        w="98%"
        zIndex="1"
        background="rgba(23, 25, 35, 0.9)"
        p={5}
      >
        <Header />
      </Center>
      <Section>
        <HomePage />
      </Section>
      <Section>
        <InternetBankingFront />
      </Section>
      <Section>
        <Pokedex />
      </Section>
      <Section>
        <ExpressHandlerErrors />
      </Section>
      <Timeline />
    </Container>
  );
}
