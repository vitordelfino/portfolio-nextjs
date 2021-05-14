import { useCallback } from 'react';
import { Center, Text, Box, Img, useBreakpointValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { StyledCarousel } from './styles';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Articles = (): JSX.Element => {
  const titleSize = useBreakpointValue({
    base: '2xl',
    sm: 'xl',
    md: 'xl',
    lg: 'xl',
    xl: 'xl',
  });

  const titleMargin = useBreakpointValue({
    base: '0',
    sm: '5',
    md: '5',
    lg: '5',
    xl: '5',
  });

  const marginBox = useBreakpointValue({
    base: '8',
    sm: '12',
    md: '12',
    lg: '12',
    xl: '12',
  });

  const data = [
    {
      link:
        'https://dev.to/vitordelfino/criando-e-testando-uma-api-com-node-typescript-typeorm-jest-swagger-part-1-di7',
      title: 'Setup inicial + Express',
      image: '/article.png',
    },
    {
      link:
        'https://dev.to/vitordelfino/criando-e-testando-uma-api-com-node-typescript-typeorm-jest-swagger-part-2-1i12',
      title: 'Configurando Typeorm + Primeiro CRUD',
      image: '/article.png',
    },
    {
      link: 'https://dev.to/vitordelfino/validacoes-com-yup-swagger-50ll',
      title: 'Validações com Yup + Swagger',
      image: '/article.png',
    },
    {
      link:
        'https://dev.to/vitordelfino/escrevendo-testes-com-jest-supertest-1ed',
      title: 'Escrevendo testes com Jest + supertest',
      image: '/article.png',
    },
    {
      link: 'https://dev.to/vitordelfino/autenticacao-com-jwt-22o7',
      title: 'Autenticação com JWT',
      image: '/article.png',
    },
  ];
  const onClickItem = useCallback((i) => {
    window.open(data[i].link, '_blank');
  }, []);
  return (
    <Center maxW="sm" flexDirection="column">
      <Text
        fontSize={titleSize}
        fontWeight="semibold"
        marginBottom={titleMargin}
      >
        Some posts published
      </Text>

      <StyledCarousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        onClickItem={onClickItem}
      >
        {data.map((a) => (
          <Box
            borderWidth="1px"
            borderRadius="lg"
            marginBottom={marginBox}
            cursor="pointer"
            backgroundColor="whiteAlpha.100"
            boxShadow="xl"
            borderColor="whiteAlpha.50"
            key={a.title}
          >
            <Img src={a.image} alt={a.title} />
            <Box p="6">
              <Text fontWeight="medium">
                {a.title}&nbsp;
                <ExternalLinkIcon marginBottom="1" marginLeft="1" />
              </Text>
            </Box>
          </Box>
        ))}
      </StyledCarousel>
    </Center>
  );
};

export default Articles;
