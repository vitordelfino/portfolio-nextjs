import {
  VStack,
  Text,
  Center,
  Icon,
  Flex,
  Wrap,
  WrapItem,
  Tag,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiCalendar } from 'react-icons/fi';

import { Timeline, Container, Content } from './styles';
import data from './data.json';

const TimelineComponent = (): JSX.Element => {
  const variant = useBreakpointValue<[string, string, string, string, string]>({
    base: ['5xl', '5xl', '6xl', '5xl', '3rem'],
    sm: ['xl', 'sm', 'md', 'sm', 'sm'],
    md: ['xl', 'sm', 'md', 'sm', 'sm'],
    lg: ['xl', 'sm', 'md', 'sm', 'sm'],
    xl: ['xl', 'sm', 'md', 'sm', 'sm'],
  });
  const iconVariant = useBreakpointValue<[string, string]>({
    base: ['4rem', '5'],
    sm: ['auto', '1.5'],
    md: ['auto', '1.5'],
    lg: ['auto', '1.5'],
    xl: ['auto', '1.5'],
  });

  const [iconSize, marginIcon] = iconVariant ?? ['auto', '1.5'];

  const [
    fontSizeExp,
    fontSizePeriod,
    fontSizeFunction,
    fontSizeDescription,
    tagSize,
  ] = variant ?? ['xl', 'sm', 'md', 'sm', 'sm'];
  return (
    <Center w="100%">
      <VStack w="100%">
        <Text fontSize={fontSizeExp} fontWeight="medium" marginBottom="10px">
          My Experience
        </Text>

        <Timeline>
          {data.map((d) => (
            <Container
              position={d.position as any}
              data-aos="fade"
              key={d.description}
            >
              <Content data-aos={`fade-${d.effect}`}>
                <Flex
                  justifyContent="flex-start"
                  alignItems="center"
                  marginBottom="1.5"
                >
                  <Icon
                    as={FiCalendar}
                    marginRight={marginIcon}
                    w={iconSize}
                    h={iconSize}
                  />
                  <Text
                    fontSize={fontSizePeriod}
                    fontWeight="semibold"
                    mt="3px"
                  >
                    {d.period}
                  </Text>
                </Flex>
                <Flex direction="row">
                  <Text>&bull;</Text>&nbsp;
                  <Text fontSize={fontSizeFunction} fontWeight="medium">
                    {d.function}&nbsp; at&nbsp;
                    <strong>{d.company}</strong>
                  </Text>
                </Flex>
                <Flex margin="0.5rem 0.1rem">
                  <Text fontSize={fontSizeDescription}>{d.description}</Text>
                </Flex>
                <Wrap>
                  {d.techs.primary.map((t) => (
                    <WrapItem key={t}>
                      <Tag
                        size={tagSize}
                        colorScheme="facebook"
                        style={{ fontSize: tagSize !== 'sm' ? tagSize : '' }}
                      >
                        <Text>{t}</Text>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
                <Wrap mt="0.5rem">
                  {d.techs.secondary.map((t) => (
                    <WrapItem key={t}>
                      <Tag
                        size={tagSize}
                        colorScheme="messenger"
                        style={{ fontSize: tagSize !== 'sm' ? tagSize : '' }}
                      >
                        <Text>{t}</Text>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Content>
            </Container>
          ))}
        </Timeline>
      </VStack>
    </Center>
  );
};

export default TimelineComponent;
