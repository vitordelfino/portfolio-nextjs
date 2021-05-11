import {
  VStack,
  HStack,
  Text,
  Img,
  useBreakpointValue,
} from '@chakra-ui/react';

const Home = (): JSX.Element => {
  const variant = useBreakpointValue<[string, string, string, string, string]>({
    base: ['2xl', 'xl', '36', '10rem', '16'],
    xs: ['2xl', 'lg', '36', 'none', '16'],
    sm: ['2xl', 'lg', '36', 'none', '16'],
    md: ['4xl', 'lg', '48', 'none', '16'],
    lg: ['5xl', 'lg', '52', 'none', '16'],
    xl: ['6xl', 'lg', '64', 'none', '16'],
  });
  const [fontS, secondFont, imgW, marginTop, spacing] = variant ?? [
    '2xl',
    '36',
    'lg',
    'none',
    '16',
  ];

  return (
    <VStack
      spacing={spacing}
      data-aos="fade"
      margin={`${marginTop} auto`}
      textAlign="center"
    >
      <VStack>
        <HStack>
          <Text fontSize={fontS} fontWeight="thin">
            Hi, I&apos;m{' '}
          </Text>
          <Text fontSize={fontS} fontWeight="500">
            Vitor Delfino
          </Text>
        </HStack>
        <Text fontSize={secondFont} fontWeight="light">
          I develop some things for Job and Fun
        </Text>
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
