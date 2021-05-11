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
} from '@chakra-ui/react';

const InternetBankingFront = (): JSX.Element => {
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
    {
      icon: '/icons/nodejs.svg',
      name: 'Node.JS',
    },
    {
      icon: '/icons/typeorm.png',
      name: 'Typeorm',
    },
    {
      icon: '/icons/rabbitmq.svg',
      name: 'RabbitMQ',
    },
    {
      icon: '/icons/jest.svg',
      name: 'Jest',
    },
    {
      icon: '/icons/docker.png',
      name: 'Docker',
    },
  ];
  return (
    <Stack direction={direction} justifyContent="center" data-aos="fade">
      <Center w={size} data-aos="zoom-in">
        <Img src="/whitelabel.png" />
      </Center>
      <Center>
        <VStack spacing="5" w="100%" data-aos="zoom-in">
          <VStack textAlign="center">
            <Text fontSize={fontTitle} fontWeight="500">
              Internet Banking Whitelabel
            </Text>
            <Text fontSize={fontDescription}>
              An whitelabel internet bank, using React with Redux / Redux Saga.
              <br />
              The backend is develop with Node.JS + Typescript + Typeorm.
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

export default InternetBankingFront;
