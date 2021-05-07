import styles, { css } from 'styled-components';

export const Timeline = styles.div`
  & {
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #EDF2F7;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1
  }

  @media(max-width: 800px) {
    &:after {
      left: 31px
    }
  }
`;

export const Container = styles.div<{ position: 'left' | 'right' }>`
  & {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }
  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -13px;
    background-color: #EDF2F7;
    border: 4px solid #2C5282;
    top: 15px;
    border-radius: 50%;
    z-index: 2;
  }

  @media(max-width: 800px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  ${(props) =>
    props.position === 'left' &&
    css`
      & {
        left: 0;
      }
      /* &:before {
        content: ' ';
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid #edf2f7;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent #edf2f7;
       }*/
      @media (max-width: 800px) {
        &:after {
          left: 18px;
        }
      }
    `}

  ${(props) =>
    props.position === 'right' &&
    css`
      & {
        left: 50%;
      }
      /* &:before {
        content: ' ';
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid #edf2f7;
        border-width: 10px 10px 10px 0;
        border-color: transparent #edf2f7 transparent transparent;
      } */
      &:after {
        left: -13px;
      }
      @media (max-width: 800px) {
        & {
          left: 0%;
        }
        &:after {
          left: 18px;
        }
      }
    `}
`;

export const Content = styles.div`
  padding: 20px 30px;
  background-color: #EDF2F7;
  position: relative;
  border-radius: 6px;
  color: #171923;
  cursor: pointer;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.05);
  }
`;
