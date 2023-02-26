import React from 'react';
import {
  Section,
  SectionTitleBox,
  SectionTitle,
  ServiciesList,
  ServiceCard,
  CardName,
  CardText,
  CardPrice,
} from './Servicies.styled';
import Container from 'components/Container/Container';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';

function Servicies() {
  return (
    <Section>
      <Container>
        <SectionTitleBox>
          <SectionTitle>ПАКЕТЫ УСЛУГ</SectionTitle>
          <Slash>
            <use href={sprite + '#Slash'} />
          </Slash>
        </SectionTitleBox>
        <ServiciesList>
          <ServiceCard>
            <CardName>Стандарт</CardName>
            <CardText>Проживание на вилле 6 ночей</CardText>
            <CardText>Номер категории стандарт</CardText>
            <CardText>Экипировка для обучения</CardText>
            <CardText>Обучение серфингу 5 тренировок по 2 часа</CardText>
            <CardText>Страховка</CardText>
            <CardText>Вечеринка с угощениями и дискотекой</CardText>
            <CardPrice style={{ marginTop: '137px' }}>450$</CardPrice>
          </ServiceCard>
          <ServiceCard>
            <CardName>Все включено</CardName>
            <CardText>Проживание на вилле 6 ночей</CardText>
            <CardText>Номер категории люкс</CardText>
            <CardText>Экипировка для обучения</CardText>
            <CardText>Обучение серфингу 8 тренировок по 2 часа</CardText>
            <CardText>Страховка</CardText>
            <CardText>Вечеринка с угощениями и дискотекой</CardText>
            <CardText>Авиа перелет Тенерифе -Лансароте - Тенерифе </CardText>
            <CardText>Завтраки на вилле</CardText>
            <CardPrice>950$</CardPrice>
          </ServiceCard>
          <ServiceCard>
            <CardName>Профи</CardName>
            <CardText>Проживание на вилле 8 ночей</CardText>
            <CardText>Номер категории люкс</CardText>
            <CardText>Экипировка для обучения</CardText>
            <CardText>Обучение серфингу 16 тренировок по 2 часа</CardText>
            <CardText>Страховка</CardText>
            <CardText>Вечеринка с угощениями и дискотекой</CardText>
            <CardText>Авиа перелет Тенерифе -Лансароте - Тенерифе </CardText>
            <CardText>Завтраки и ужины на вилле</CardText>
            <CardPrice>1450$</CardPrice>
          </ServiceCard>
        </ServiciesList>
      </Container>
    </Section>
  );
}

export default Servicies;
