import React from 'react';
import { HeroWrapper, Blob, BigBlob } from './HeroStyles';
import Card from '../Card/Card';
import blob from '../../assets/images/blob.svg';

const Hero = () => {
  return (
    <HeroWrapper>
      <Card />
      <Blob src={blob} />
      <BigBlob src={blob} />
    </HeroWrapper>
  );
};

export default Hero;
