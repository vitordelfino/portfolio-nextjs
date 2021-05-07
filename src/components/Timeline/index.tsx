import {
  VStack,
  Text,
  Center,
  Icon,
  Flex,
  Wrap,
  WrapItem,
  Tag,
} from '@chakra-ui/react';
import { FiCalendar } from 'react-icons/fi';
import Aos from 'aos';
import { useEffect } from 'react';
import { Timeline, Container, Content } from './styles';
import data from './data.json';

const TimelineComponent = (): JSX.Element => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: 'mobile',
    });
  }, []);

  return (
    <Center w="100%">
      <VStack w="100%">
        <Text fontSize="xl" fontWeight="medium" marginBottom="10px">
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
                  <Icon as={FiCalendar} marginRight="1.5" />
                  <Text fontSize="sm" fontWeight="semibold" mt="3px">
                    {d.period}
                  </Text>
                </Flex>
                <Flex>
                  <Text>&bull;</Text>&nbsp;
                  <Text fontWeight="medium">{d.function}&nbsp;</Text>
                  <Text>at</Text>&nbsp;
                  <Text fontWeight="semibold">{d.company}</Text>
                </Flex>
                <Flex margin="0.5rem 0.1rem">
                  <Text fontSize="sm">{d.description}</Text>
                </Flex>
                <Wrap>
                  {d.techs.primary.map((t) => (
                    <WrapItem key={t}>
                      <Tag size="sm" colorScheme="facebook">
                        <Text>{t}</Text>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
                <Wrap mt="0.5rem">
                  {d.techs.secondary.map((t) => (
                    <WrapItem key={t}>
                      <Tag size="sm" colorScheme="messenger">
                        <Text>{t}</Text>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Content>
            </Container>
          ))}

          <Container position="right" data-aos="fade">
            <Content data-aos="fade-left">
              <h2>Abr 2019 - Dez 2019</h2>
              <Text fontWeight="medium">Atlas Quantum</Text>
            </Content>
          </Container>
        </Timeline>
      </VStack>
    </Center>
  );
};

export default TimelineComponent;
