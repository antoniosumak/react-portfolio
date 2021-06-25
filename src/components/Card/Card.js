import React from 'react';
import ProfilePicture from '../../assets/images/profile.jpg';

import {
  CardWrapper,
  ImageWrapp,
  Image,
  NameHeader,
  Titles,
  DescriptionContainer,
  Description,
  SocialMedia,
  Instagram,
  Github,
  LinkedIn,
  Outline,
} from './CardStyles';

import { Bold } from '../../lib/styles/GeneralStyles';

const Card = () => {
  return (
    <>
      <CardWrapper>
        <ImageWrapp>
          <Image src={ProfilePicture} />
        </ImageWrapp>
        <NameHeader>Antonio Šumak</NameHeader>
        <Titles>
          Frontend <Bold>developer</Bold>
        </Titles>
        <DescriptionContainer>
          <Description>
            I'm a third year student at the Faculty of Organization and
            Informatics in Varaždin. Self-taught frontend web developer.
            Motivated for learning and creating new things!
          </Description>
        </DescriptionContainer>
        <SocialMedia>
          <Outline>
            <Instagram />
          </Outline>
          <Outline>
            <Github />
          </Outline>
          <Outline>
            <LinkedIn />
          </Outline>
        </SocialMedia>
      </CardWrapper>
    </>
  );
};

export default Card;
