import React from 'react';
import {
  Section,
  ImgBox,
  SectionTitleBox,
  SectionTitle,
  ImgMainText,
  ImgTextBox,
  ImgText,
} from './Blog.styled';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';

function Blog() {
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
          <ImgMainText>
            ЧТО НЕОБХОДИМО ВЗЯТЬ С<br />
            СОБОЙ НА СЕРФ ТУР
          </ImgMainText>
          <ImgText>
            ТОП 20 необходимых вещей для комфортного отдыха и обучения
          </ImgText>
        </ImgTextBox>
      </ImgBox>
    </Section>
  );
}

export default Blog;
