import React from 'react';
import {
  Section,
  SectionTitleBox,
  SectionTitle,
  FirstBox,
  InnerFirstBox,
  InnerFirstTitleBox,
  InnerFirstTitleSvg,
  InnerFirstTitle,
  InnerFirstText,
  SecondBox,
  SecondLeftBox,
  SecondRightBox,
  LeftBoxSvg,
  LeftBoxText,
  LeftSvgTextBox,
  Percentage,
  SvgTextPersBox,
} from './GetFromSchool.styled';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';

function GetFromSchool() {
  return (
    <Section>
      <SectionTitleBox>
        <SectionTitle>В ШКОЛЕ ВЫ ПОЛУЧИТЕ</SectionTitle>
        <Slash>
          <use href={sprite + '#Slash'} />
        </Slash>
      </SectionTitleBox>
      <FirstBox>
        <InnerFirstBox>
          <InnerFirstTitleBox>
            <InnerFirstTitleSvg>
              <use href={sprite + '#Accom'} />
            </InnerFirstTitleSvg>
            <InnerFirstTitle>ПРОЖИВАНИЕ</InnerFirstTitle>
          </InnerFirstTitleBox>
          <InnerFirstText>
            Наша школа серфинга находится в 100 м от океанского побережья. К
            услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней
            террасы открывается вид на океан. Расстояние до центра города 15
            мин.{' '}
          </InnerFirstText>
        </InnerFirstBox>
        <InnerFirstBox>
          <InnerFirstTitleBox style={{ width: '184px' }}>
            <InnerFirstTitleSvg>
              <use href={sprite + '#Plain'} />
            </InnerFirstTitleSvg>
            <InnerFirstTitle>ПЕРЕЛЕТ И СТРАХОВКУ</InnerFirstTitle>
          </InnerFirstTitleBox>
          <InnerFirstText>
            Все участники программы застрахованы страховой компанией Allianz.
            <br />
            Перелет из Тенерифе до острова Лансароте и обратно входит в
            стоимость программы
          </InnerFirstText>
        </InnerFirstBox>
        <InnerFirstBox>
          <InnerFirstTitleBox style={{ width: '206px' }}>
            <InnerFirstTitleSvg>
              <use href={sprite + '#Wawe'} />
            </InnerFirstTitleSvg>
            <InnerFirstTitle>ОБУЧЕНИЕ И ЭКИПИРОВКУ</InnerFirstTitle>
          </InnerFirstTitleBox>
          <InnerFirstText>
            Все оборудование и экипировка известных производителей и
            предоставляется на весь курс программы. Тренировочный процесс
            начинается с определения вашего уровня катания{' '}
          </InnerFirstText>
        </InnerFirstBox>
      </FirstBox>
      <SecondBox>
        <SecondLeftBox>
          <SvgTextPersBox>
            <LeftSvgTextBox>
              <LeftBoxSvg style={{ width: '200px' }}>
                <use href={sprite + '#Sea'} />
              </LeftBoxSvg>
              <LeftBoxText>Приехали второй раз</LeftBoxText>
            </LeftSvgTextBox>
            <Percentage>85%</Percentage>
          </SvgTextPersBox>
          <SvgTextPersBox>
            <LeftSvgTextBox>
              <LeftBoxSvg style={{ width: '247px' }}>
                <use href={sprite + '#Sea2'} />
              </LeftBoxSvg>
              <LeftBoxText>Научились кататься</LeftBoxText>
            </LeftSvgTextBox>
            <Percentage>95%</Percentage>
          </SvgTextPersBox>
          <SvgTextPersBox>
            <LeftSvgTextBox>
              <LeftBoxSvg style={{ width: '293px' }}>
                <use href={sprite + '#Sea3'} />
              </LeftBoxSvg>
              <LeftBoxText>Довольных клиентов</LeftBoxText>
            </LeftSvgTextBox>
            <Percentage>99%</Percentage>
          </SvgTextPersBox>
        </SecondLeftBox>
        <SecondRightBox>
          <InnerFirstText style={{ margin: '0' }}>
            Огромным преимуществом нашей школы является собственная методика
            обучения. Мы разработали собственный стиль обучения серфингу,
            который позволяет новичкам максимально быстро встать на доску.{' '}
          </InnerFirstText>
          <InnerFirstText style={{ marginTop: '30px' }}>
            Именно наша методика и наши преподаватели позволили нам пройти
            аттестацию Федерации серфинга Канарских островов - FEDERACIÓN
            CANARIA DE SURF. Это означает, что наша школа соответствует всем
            мировым стандартам. Переаттестация производится ежегодно и это
            позволяет нам всегда стремиться к улучшению обучения.
          </InnerFirstText>
        </SecondRightBox>
      </SecondBox>
    </Section>
  );
}

export default GetFromSchool;
