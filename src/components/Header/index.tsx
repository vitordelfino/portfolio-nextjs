import * as chakra from '@chakra-ui/react';
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
  return (
    <chakra.Center>
      <chakra.HStack spacing={8}>
        {socials.map((s) => (
          <chakra.Tooltip label={s.name} key={s.link}>
            <chakra.Link href={s.link} isExternal>
              <chakra.Icon
                as={s.icon}
                w="8"
                h="8"
                _hover={{ transform: 'scale(1.1)' }}
                transition="transform 0.2s"
              />
            </chakra.Link>
          </chakra.Tooltip>
        ))}
      </chakra.HStack>
    </chakra.Center>
  );
};

export default Header;
