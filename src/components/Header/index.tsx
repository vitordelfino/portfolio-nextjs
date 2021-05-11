import {
  Center,
  HStack,
  Tooltip,
  Link,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaDev, FaTwitter } from 'react-icons/fa';

const Header = (): JSX.Element => {
  const socials = [
    {
      icon: FaTwitter,
      link: 'https://twitter.com/vitordelfino',
      name: 'Twitter',
    },
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/vitor-delfino/',
      name: 'Linkedin',
    },
    {
      icon: FaGithub,
      link: 'https://github.com/vitordelfino',
      name: 'Github',
    },
    {
      icon: FaDev,
      link: 'https://dev.to/vitordelfino',
      name: 'Dev.to',
    },
  ];

  const variant = useBreakpointValue({
    base: '8',
    sm: '8',
    md: '8',
    lg: '8',
    xl: '8',
  });
  return (
    <Center>
      <HStack spacing={8}>
        {socials.map((s) => (
          <Tooltip label={s.name} key={s.link}>
            <Link href={s.link} isExternal>
              <Icon
                as={s.icon}
                w={variant || '8'}
                h={variant || '8'}
                _hover={{ transform: 'scale(1.1)' }}
                transition="transform 0.2s"
              />
            </Link>
          </Tooltip>
        ))}
      </HStack>
    </Center>
  );
};

export default Header;
