import React, { useState } from 'react';
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
  ChooseImgList,
  ChooseImgItem,
  Wrap,
} from './GetTop.styled';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';
import Top from '../../images/Top.jpg';
import data from './top.json';
import Gal1 from '../../images/Gal1.jpg';
import Gal2 from '../../images/Gal2.jpg';
import Gal3 from '../../images/Gal3.jpg';
import Gal4 from '../../images/Gal4.jpg';
import Gal5 from '../../images/Gal5.jpg';
import Gal6 from '../../images/Gal6.jpg';
import Container from 'components/Container/Container';

function GetTop() {
  const arr = [];
  arr.push(Gal1, Gal2, Gal3, Gal4, Gal5, Gal6);
  data.map((x, i) => (x.src = arr[i]));
  const [dat, setData] = useState(data);
  const [type, setType] = useState('all');
  const ImgFilter = e => {
    if (e.target.textContent === 'ТУРИСТЫ') {
      const dataNew = data.filter(x => x.type === 'tour');
      setData(dataNew);
      setType('tour');
    } else if (e.target.textContent === 'ПРИРОДА') {
      const dataNew = data.filter(x => x.type === 'natur');
      setData(dataNew);
      setType('natur');
    } else if (e.target.textContent === 'ПРОФИ') {
      const dataNew = data.filter(x => x.type === 'prof');
      setData(dataNew);
      setType('prof');
    } else if (e.target.textContent === 'ВСЕ') {
      setData(data);
      setType('all');
    }
  };
  return (
    <Section>
      <Container>
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
              Канарских островах. Среди них - чемпион Европы по лонгборду,
              который с радостью поделится опытом как с новичками, так и более
              опытными серферами. Все члены преподавательского состава являются
              сертифицированными членами Федерации серфинга Канарских островов.
              Некоторые из них знают русский язык, что определенно позиционирует
              нас как русскую школу серфинга за границей!
            </GetTopText>
            <GetTopText>
              Весь тренерский состав регулярно участвует в семинарах и курсах
              повышения квалификации, которые проводятся по всему миру
              различными известными серф-клубами и федерациями. Поэтому в нашей
              школе серфинга вы можете быть спокойны: вас обучают лучшие
              тренеры!
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
          <GetTopTitleBox>
            <GetTopTitle>ГАЛЕРЕЯ</GetTopTitle>
            <Slash>
              <use href={sprite + '#Slash'} />
            </Slash>
          </GetTopTitleBox>
          <ChooseImgList onClick={ImgFilter}>
            <ChooseImgItem
              style={{ color: type === 'all' ? '#00B2A0' : '#242121' }}
            >
              ВСЕ
            </ChooseImgItem>
            <ChooseImgItem
              style={{ color: type === 'tour' ? '#00B2A0' : '#242121' }}
            >
              ТУРИСТЫ
            </ChooseImgItem>
            <ChooseImgItem
              style={{ color: type === 'natur' ? '#00B2A0' : '#242121' }}
            >
              ПРИРОДА
            </ChooseImgItem>
            <ChooseImgItem
              style={{ color: type === 'prof' ? '#00B2A0' : '#242121' }}
            >
              ПРОФИ
            </ChooseImgItem>
          </ChooseImgList>
          <Gallary>
            {dat.map(({ id, src }) => (
              <Wrap>
                <GallaryImg key={id} src={src} />
              </Wrap>
            ))}
          </Gallary>
          <GallaryBtn>ПОКАЗАТЬ ЕЩЕ</GallaryBtn>
        </GalleryBox>
      </Container>
    </Section>
  );
}

export default GetTop;
