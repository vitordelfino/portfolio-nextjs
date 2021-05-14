import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const StyledCarousel = styled(Carousel)`
  @media (max-width: 800px) {
    width: 100%;
    padding: 1.5rem;
    display: flex;
  }
`;
