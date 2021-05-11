import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  // box-sizing: border-box;
  @media (max-width: 800px) {
    height: auto;
    margin: 3rem 0;
  }
`;
