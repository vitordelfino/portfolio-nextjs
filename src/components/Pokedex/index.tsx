import {
  Center,
  Img,
  Text,
  Stack,
  VStack,
  useBreakpointValue,
  StackDirection,
  Wrap,
  WrapItem,
  Link,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

const Pokedex = (): JSX.Element => {
  const variant = useBreakpointValue<
    [StackDirection, string, string, string, string, string, string, string]
  >({
    base: ['column', 'auto', 'xl', 'lg', 'none', '16', '2rem', 'sm'],
    lg: ['row', '4xl', '2xl', 'lg', '550px', '20', '12', 'md'],
    xl: ['row', '4xl', '2xl', 'lg', '550px', '20', '12', 'md'],
  });
  const [
    direction,
    size,
    fontTitle,
    fontDescription,
    wrapWidth,
    wrapItemWidth,
    iconSize,
    techTitleSize,
  ] = variant ?? ['row', '4xl', '2xl', 'lg', '550px', '20', '12', 'md'];
  const techs = [
    {
      icon: '/icons/nextjs-icon.svg',
      name: 'Next',
    },
    {
      icon: '/icons/react.svg',
      name: 'React',
    },
    {
      icon: '/icons/chakra-ui.png',
      name: 'Chakra',
    },
    {
      icon: '/icons/react-query.svg',
      name: 'React Query',
    },
    {
      icon: '/icons/typescript.svg',
      name: 'Typescript',
    },
  ];
  return (
    <Stack direction={direction} justifyContent="center" data-aos="fade">
      <Center w={size} data-aos="zoom-in">
        <video autoPlay loop muted width="80%">
          <source src="/video/pokedex.mp4" type="video/mp4" />
        </video>
      </Center>
      <Center data-aos="zoom-in">
        <VStack spacing="5" w="100%">
          <VStack textAlign="center">
            <Text fontSize={fontTitle} fontWeight="500">
              pokedex.dev &nbsp;
              <Link href="https://pokedex.dev" isExternal>
                <ExternalLinkIcon h="4" w="4" mb="1" />
              </Link>
            </Text>

            <Text fontSize={fontDescription}>
              Developed to study new techs like Nextjs + Chakra UI + React Query
            </Text>
          </VStack>
          <Wrap
            p="1.5"
            spacing="4"
            align="center"
            maxW={wrapWidth}
            justify="center"
          >
            {techs.map((t) => (
              <WrapItem
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                key={t.name}
                w={wrapItemWidth}
              >
                <Img
                  src={t.icon}
                  w={iconSize}
                  filter="drop-shadow(rgb(153, 153, 153) 0px 0px 10px)"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  transition="scale 0.2s"
                />
                <Text marginTop="1.5" fontSize={techTitleSize}>
                  {t.name}
                </Text>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </Center>
    </Stack>
  );
};

export default Pokedex;
