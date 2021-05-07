import { Center } from '@chakra-ui/react';
import { Section as StyledSection } from './styled';
import Header from '../Header';

type SectionProps = {
  children: JSX.Element;
};
const Section = ({ children }: SectionProps): JSX.Element => (
  <StyledSection>{children}</StyledSection>
);

export default Section;
