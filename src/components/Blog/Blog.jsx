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
} from './Blog.styled';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';
import data from './Bulog.json';

function Blog() {
  const arr = [];
  data.map(x => arr.push(x.text));
  const [text, setText] = useState(arr[0]);
  const [targ, setTarg] = useState(0);
  const handleSlide = e => {
    if (typeof e.target.parentElement.parentElement.value === 'number') {
      setText(arr[e.target.parentElement.parentElement.value]);
      setTarg(e.target.parentElement.parentElement.value);
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
        <ImgTextBox>
          <ImgMainText>{text}</ImgMainText>
          <ImgText>
            ТОП 20 необходимых вещей для комфортного отдыха и обучения
          </ImgText>
        </ImgTextBox>
        <SliderDotsList start="0" onClick={handleSlide}>
          {data.map(({ text, id }, i) => (
            <SliderDotItem key={id} value={i}>
              <SliderDotImg
                style={{ fill: targ === i ? '#00b2a0' : 'white' }}
              />
            </SliderDotItem>
          ))}
        </SliderDotsList>
      </ImgBox>
    </Section>
  );
}

export default Blog;
