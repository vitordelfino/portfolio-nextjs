import Aos from 'aos';
import {
  Center,
  VStack,
  HStack,
  Text,
  Img,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const Home = (): JSX.Element => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const variant = useBreakpointValue<[string, string]>({
    base: ['2xl', '36'],
    xs: ['2xl', '36'],
    sm: ['2xl', '36'],
    md: ['4xl', '48'],
    lg: ['5xl', '52'],
    xl: ['5xl', '52'],
  });
  const [fontS, imgW] = variant ?? ['2xl', '36'];

  return (
    <Center h="100vh" data-aos="fade">
      <VStack spacing="16">
        <VStack>
          <HStack>
            <Text fontSize={fontS} fontWeight="thin">
              Hi, I&apos;m{' '}
            </Text>
            <Text fontSize={fontS} fontWeight="500">
              Vitor Delfino
            </Text>
          </HStack>
          <Text fontWeight="light">I develop some things for Job and Fun</Text>
        </VStack>
        <Img
          src="/profile.png"
          borderRadius="full"
          w={imgW}
          data-aos="slide-down"
          data-aos-offset="10"
        />
      </VStack>
    </Center>
  );
};

export default Home;
