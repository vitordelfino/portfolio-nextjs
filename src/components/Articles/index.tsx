import { memo, useCallback } from 'react';
import {
  Center,
  Text,
  Box,
  Img,
  useBreakpointValue,
  Tag,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { QueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { useFetchArticles } from '../../hooks/useArticles';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { StyledCarousel } from './styles';

const Articles = (): JSX.Element => {
  const { data: articles } = useFetchArticles();
  console.log('articles', articles);
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

  const minHeightArticle = useBreakpointValue({
    base: '23rem',
    sm: 'none',
    md: 'none',
    lg: 'none',
    xl: 'none',
  });

  const onClickItem = useCallback((i) => {
    if (articles && articles[i]) window.open(articles[i].url, '_blank');
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
        {articles &&
          articles.map((a) => (
            <Box
              borderWidth="1px"
              borderRadius="lg"
              marginBottom={marginBox}
              cursor="pointer"
              backgroundColor="whiteAlpha.100"
              boxShadow="xl"
              borderColor="whiteAlpha.50"
              key={a.title}
              minHeight={minHeightArticle}
              marginRight="1.5"
              marginLeft="1.5"
            >
              <Img src={a.cover_image} alt={a.title} />
              <Box p="6" textAlign="start">
                <Text fontWeight="medium">
                  {a.title}&nbsp;
                  <ExternalLinkIcon marginBottom="1" marginLeft="1" />
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  {a.description}
                </Text>
                <Box mt="1">
                  {a.tag_list.map((t) => (
                    <Tag m="1" size="sm" colorScheme="teal">
                      <Text fontWeight="semibold">{t}</Text>
                    </Tag>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
      </StyledCarousel>
    </Center>
  );
};

export async function getStaticProps(): Promise<{
  props: { dehydratedState: DehydratedState };
}> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('articles', useFetchArticles);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default memo(Articles);
