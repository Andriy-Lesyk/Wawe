import React from 'react';
import {
  Section,
  GetTopPictureBox,
  GetTopBox,
  GetTopTitleBox,
  GetTopTitle,
  GetTopText,
  GetTopImg,
  Gallary,
  GalleryBox,
  GallaryImg,
  GallaryBtn,
} from './GetTop.styled';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';
import Top from '../../images/Top.jpg';
import Gal1 from '../../images/Gal1.jpg';
import Gal2 from '../../images/Gal2.jpg';
import Gal3 from '../../images/Gal3.jpg';
import Gal4 from '../../images/Gal4.jpg';
import Gal5 from '../../images/Gal5.jpg';
import Gal6 from '../../images/Gal6.jpg';

function GetTop() {
  return (
    <Section>
      <GetTopPictureBox>
        <GetTopBox>
          <GetTopTitleBox>
            <GetTopTitle>ПОКОРЯЙ ВЕРШИНЫ</GetTopTitle>
            <Slash>
              <use href={sprite + '#Slash'} />
            </Slash>
          </GetTopTitleBox>
          <GetTopText>
            Преподаватели нашей школы серфинга в числе лучших серферов на
            Канарских островах. Среди них - чемпион Европы по лонгборду, который
            с радостью поделится опытом как с новичками, так и более опытными
            серферами. Все члены преподавательского состава являются
            сертифицированными членами Федерации серфинга Канарских островов.
            Некоторые из них знают русский язык, что определенно позиционирует
            нас как русскую школу серфинга за границей!
          </GetTopText>
          <GetTopText>
            Весь тренерский состав регулярно участвует в семинарах и курсах
            повышения квалификации, которые проводятся по всему миру различными
            известными серф-клубами и федерациями. Поэтому в нашей школе
            серфинга вы можете быть спокойны: вас обучают лучшие тренеры!
          </GetTopText>
          <GetTopText>
            Методика обучения серфингу рассчитана как на новичков, на серферов
            среднего уровня, так и на серферов уровня ТОП. Тренеры находят
            подход к каждому, несмотря на то, что обучение серфингу в нашей
            школе производится в группах. Однако, мы предлагаем персональные
            уроки серфинга - только вы и тренер! П
          </GetTopText>
        </GetTopBox>
        <GetTopImg src={Top} alt="next" />
      </GetTopPictureBox>
      <GalleryBox>
        <Gallary>
          <GallaryImg src={Gal1} />
          <GallaryImg src={Gal2} />
          <GallaryImg src={Gal3} />
          <GallaryImg src={Gal4} />
          <GallaryImg src={Gal5} />
          <GallaryImg src={Gal6} />
        </Gallary>
        <GallaryBtn>ПОКАЗАТЬ ЕЩЕ</GallaryBtn>
      </GalleryBox>
    </Section>
  );
}

export default GetTop;
