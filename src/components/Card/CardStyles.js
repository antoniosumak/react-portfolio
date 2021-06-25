import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';

export const CardWrapper = styled.div`
  position: relative;
  z-index: 10;
  background-color: ${colors.white};
  width: 95%;
  margin: 0 auto;
  min-height: 100px;
  border-radius: 10px;
  border-top: 4px solid ${colors.lightPurple};
  border-bottom: 4px solid ${colors.lightPurple};

  @media screen and (${breakpoints.tablet}) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const ImageWrapp = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-top: 40px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 24px;
`;

export const NameHeader = styled.h2`
  text-align: center;
  padding-bottom: 8px;
`;

export const Titles = styled.p`
  font-weight: 300;
  text-align: center;
  font-size: 12px;
`;

export const DescriptionContainer = styled.div`
  padding: 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 20px 40px;
  }
`;

export const Description = styled.p`
  text-align: justify;
  line-height: 160%;
`;

export const SocialMedia = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Instagram = styled(AiOutlineInstagram)`
  font-size: 20px;
  transition: 0.3s ease-in-out;

  color: ${colors.white};

  &:hover {
    color: ${colors.black};
    cursor: pointer;
  }
`;

export const Github = styled(AiOutlineGithub)`
  font-size: 20px;
  transition: 0.3s ease-in-out;
  color: ${colors.white};

  &:hover {
    color: ${colors.black};
    cursor: pointer;
  }
`;

export const LinkedIn = styled(AiOutlineLinkedin)`
  font-size: 20px;
  transition: 0.3s ease-in-out;
  color: ${colors.white};

  &:hover {
    color: ${colors.black};
    cursor: pointer;
  }
`;

export const Outline = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.lightPurple};
    cursor: pointer;
  }
`;
