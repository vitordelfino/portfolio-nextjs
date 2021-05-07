import { Section as StyledSection } from './styled';

type SectionProps = {
  children: JSX.Element;
};
const Section = ({ children }: SectionProps): JSX.Element => (
  <StyledSection>{children}</StyledSection>
);

export default Section;
