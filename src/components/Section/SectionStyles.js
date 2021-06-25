import styled from 'styled-components';
import { breakpoints } from '../../lib/styles/theme';

export const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;

  @media screen and (${breakpoints.tablet}) {
    padding: 0px 24px;
  }
  @media screen and (${breakpoints.desktop}) {
    max-width: 993px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;
