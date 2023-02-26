import styled from '@emotion/styled';
import Blog from '../../images/Blog.jpg';
import { BsFillCircleFill } from 'react-icons/bs';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`;
export const ImgBox = styled.div`
  background-image: url(${Blog});
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  height: 800px;
`;

export const SectionTitleBox = styled.div`
  display: flex;
  margin-bottom: 200px;
  align-self: center;
`;
export const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.6px;
  color: #01353e;
`;
export const ImgMainText = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.6px;
  color: #ffffff;
`;
export const ImgText = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #ffffff;
`;
export const ImgTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 600px;
  margin: 314px 360px 0 0;
`;
export const SliderDotsList = styled.ol`
  margin: 259px auto 0;
  padding: 0;
  width: max-content;
  display: flex;
`;
export const SliderDotItem = styled.li`
  margin: 0;
  list-style-type: none;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const SliderDotImg = styled(BsFillCircleFill)`
  width: 15px;
  height: 15px;
  fill: #00b2a0;
  border-radius: 50%;
`;
