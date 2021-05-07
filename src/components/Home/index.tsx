import {
  Center,
  VStack,
  HStack,
  Text,
  Img,
  useBreakpointValue,
} from '@chakra-ui/react';

const Home = (): JSX.Element => {
  const variant = useBreakpointValue<[string, string, string]>({
    base: ['6xl', '64', 'base'],
    xs: ['2xl', '36', 'xs'],
    sm: ['2xl', '36', 'sm'],
    md: ['4xl', '48', 'md'],
    lg: ['5xl', '52', 'lg'],
    xl: ['6xl', '64', 'xl'],
  });
  const [fontS, imgW] = variant ?? ['2xl', '36', 'undefined'];
  return (
    <VStack spacing="16" data-aos="fade">
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
        // data-aos="slide-down"
      />
    </VStack>
  );
};

export default Home;
