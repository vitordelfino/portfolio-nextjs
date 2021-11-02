import { Center } from '@chakra-ui/react';
import Head from 'next/head';
import HomePage from '../components/Home';
import InternetBankingFront from '../components/InternetBankingFront';
import Timeline from '../components/Timeline';
import Section from '../components/Section';
import Header from '../components/Header';
import Pokedex from '../components/Pokedex';
import Container from '../components/Container';
import ExpressHandlerErrors from '../components/ExpressHandlerErrors';
import Articles from '../components/Articles';
import WatchVideosInGroup from '../components/WatchVideoInGroup';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="vitordelfino" key="twhandle" />
        <meta
          name="twitter:image"
          content="https://github.com/vitordelfino.png"
          key="twimage"
        />

        <meta property="og:url" content="www.vitordelfino.dev" key="ogurl" />
        <meta
          property="og:image"
          content="https://github.com/vitordelfino.png"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="vitordelfino.dev"
          key="ogsitename"
        />
        <meta property="og:title" content="Vitor Delfino" key="ogtitle" />
        <meta
          property="og:description"
          content="My portfolio write with Next.js"
          key="ogdesc"
        />
        <title>vitordelfino.dev</title>
      </Head>
      <Center
        position="fixed"
        style={{
          backdropFilter: 'blur(8px)',
        }}
        top="0"
        w="98%"
        zIndex="2"
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
        <WatchVideosInGroup />
      </Section>
      <Section>
        <ExpressHandlerErrors />
      </Section>
      <Section>
        <Articles />
      </Section>
      <Timeline />
    </Container>
  );
}
