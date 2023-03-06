import React, { useState } from 'react';
import {
  Section,
  ImgBox,
  SectionTitleBox,
  SectionTitle,
  ImgMainText,
  ImgTextBox,
  ImgText,
  SliderDotsList,
  SliderDotItem,
  SliderDotImg,
  ArLeft,
  ArRight,
  SliderBox,
} from './Blog.styled';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';
import data from './Bulog.json';
const arr1 = [];
data.map(x => arr1.push(x.text));

function Blog() {
  const arr = [...arr1];

  const [text, setText] = useState(arr[0]);

  const handleSlide = e => {
    if (typeof e.target.parentElement.parentElement.value === 'number') {
      setText(arr[e.target.parentElement.parentElement.value]);
    }
  };
  const handleRight = e => {
    if (arr.indexOf(text) < arr.length - 1) {
      setText(arr[arr.indexOf(text) + 1]);
    }
  };
  const handleLeft = e => {
    if (arr.indexOf(text) > 0) {
      setText(arr[arr.indexOf(text) - 1]);
    }
  };

  return (
    <Section>
      <SectionTitleBox>
        <SectionTitle>БЛОГ</SectionTitle>
        <Slash>
          <use href={sprite + '#Slash'} />
        </Slash>
      </SectionTitleBox>
      <ImgBox>
        <SliderBox>
          <ArLeft
            onClick={handleLeft}
            style={{ opacity: arr.indexOf(text) > 0 ? '1' : '0' }}
          />
          <ImgTextBox>
            <ImgMainText>{text}</ImgMainText>
            <ImgText>
              ТОП 20 необходимых вещей для комфортного отдыха и обучения
            </ImgText>
          </ImgTextBox>
          <ArRight
            onClick={handleRight}
            style={{
              opacity: arr.indexOf(text) < arr.length - 1 ? '1' : '0',
            }}
          />
        </SliderBox>

        <SliderDotsList start="0" onClick={handleSlide}>
          {data.map(({ id }, i) => (
            <SliderDotItem key={id} value={i}>
              <SliderDotImg
                style={{
                  fill: text === arr[i] ? '#00B2A0' : '#fff',
                }}
              />
            </SliderDotItem>
          ))}
        </SliderDotsList>
      </ImgBox>
    </Section>
  );
}

export default Blog;
