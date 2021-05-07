import { useEffect } from 'react';
import Aos from 'aos';
import {
  Center,
  Box,
  Img,
  Text,
  Spacer,
  Stack,
  VStack,
  useBreakpointValue,
  StackDirection,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const InternetBankingFront = (): JSX.Element => {
  useEffect(() => {
    Aos.init();
  }, []);
  const variant = useBreakpointValue<[StackDirection, string]>({
    base: ['column', '4xl'],
    lg: ['row', '4xl'],
    xl: ['row', '4xl'],
  });
  console.log('variant', variant);
  const [direction, size] = variant ?? ['row', '4xl'];
  const techs = [
    {
      icon: '/icons/react.svg',
      name: 'React',
    },
    {
      icon: '/icons/redux.svg',
      name: 'Redux',
    },
    {
      icon: '/icons/redux-saga.svg',
      name: 'Redux Saga',
    },
    {
      icon: '/icons/ant-design.svg',
      name: 'Ant.Design',
    },
    {
      icon: '/icons/reactotron.svg',
      name: 'Reactotron',
    },
    {
      icon: '/icons/socket-io.svg',
      name: 'Socket.io',
    },
    {
      icon: '/icons/typescript.svg',
      name: 'Typescript',
    },
  ];
  return (
    <Stack
      direction={direction}
      data-aos="fade"
      justifyContent="center"
      h="100vh"
    >
      <Center w={size}>
        <Img src="/whitelabel.png" data-aos="fade-right" />
      </Center>
      <Center>
        <VStack spacing="5" data-aos="fade">
          <VStack>
            <Text fontSize="2xl" fontWeight="500">
              Internet Banking Whitelabel
            </Text>
            <Text fontSize="medium">
              An whitelabel internet bank, using React with Redux / Redux Saga
            </Text>
          </VStack>
          <Wrap
            spacing="10"
            align="center"
            maxW="550px"
            marginTop="3"
            justify="center"
          >
            {techs.map((t) => (
              <WrapItem
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                w="20"
                textAlign="center"
                margin="1"
                key={t.name}
              >
                <Img
                  w="12"
                  src={t.icon}
                  filter="drop-shadow(rgb(153, 153, 153) 0px 0px 10px)"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  transition="scale 0.2s"
                />
                <Text marginTop="1.5" fontSize="md">
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

export default InternetBankingFront;
