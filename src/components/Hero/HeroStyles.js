import styled, { keyframes } from 'styled-components';
import { colors } from '../../lib/styles/theme';

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pulse = keyframes`

from {
  transform: scale(1);
}

to {
  transform: : scale(1.2);
}

`;

export const Blob = styled.img`
  z-index: 1;
  position: absolute;
  top: 0;
  left: -100px;
  width: 400px;
  animation: ${pulse} 2s linear infinite;
`;

export const BigBlob = styled.img`
  z-index: 1;
  position: absolute;
  top: 300px;
  left: 300px;
  animation: ${pulse} 2s linear infinite;
`;
