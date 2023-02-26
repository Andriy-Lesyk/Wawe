import React from 'react';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';
import Container from 'components/Container/Container';
import {
  Section,
  SectionTitleBox,
  SectionTitle,
  ImgList,
  ImgItemCart,
  CartImg,
  CartName,
  CartPosition,
} from './OurTeam.styled';
import Cart1 from '../../images/Cart1.jpg';
import Cart2 from '../../images/Cart2.jpg';
import Cart3 from '../../images/Cart3.jpg';

function OurTeam() {
  return (
    <Section>
      <Container>
        <SectionTitleBox>
          <SectionTitle>НАША КОМАНДА</SectionTitle>
          <Slash>
            <use href={sprite + '#Slash'} />
          </Slash>
        </SectionTitleBox>
        <ImgList>
          <ImgItemCart>
            <CartImg src={Cart1} />
            <CartName>Mike</CartName>
            <CartPosition>Главный инстуктор</CartPosition>
          </ImgItemCart>
          <ImgItemCart>
            <CartImg src={Cart2} />
            <CartName>Mary</CartName>
            <CartPosition>инстуктор</CartPosition>
          </ImgItemCart>
          <ImgItemCart>
            <CartImg src={Cart3} />
            <CartName>Ольга</CartName>
            <CartPosition>инстуктор</CartPosition>
          </ImgItemCart>
        </ImgList>
      </Container>
    </Section>
  );
}

export default OurTeam;
