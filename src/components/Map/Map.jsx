import React from 'react';
import Container from 'components/Container/Container';
import { Section, Img, ImgPins } from './Map.styled';
import Maps from '../../images/Map.jpg';
import sprite from '../../images/sprite.svg';
function Map() {
  return (
    <Container>
      <Section>
        <Img src={Maps} />
        <ImgPins>
          <use href={sprite + '#Pin'} />
        </ImgPins>
      </Section>
    </Container>
  );
}

export default Map;
