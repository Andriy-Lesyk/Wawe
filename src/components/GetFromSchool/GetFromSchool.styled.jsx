import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 200px 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
  margin: 0 auto;
  background-color: #f8f8f8;
`;

export const SectionTitleBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  color: #01353e;
`;
export const FirstBox = styled.div`
  margin-top: 100px;
  display: flex;
`;
export const InnerFirstBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 75px;
  }
`;
export const InnerFirstTitleBox = styled.div`
  width: 220px;
  display: flex;
  justify-content: center;
`;
export const InnerFirstTitleSvg = styled.svg`
  height: 50px;
  width: min-content;
`;
export const InnerFirstTitle = styled.h3`
  margin: 0;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #242121;
`;
export const InnerFirstText = styled.p`
  margin: 0;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #242121;
  margin-top: 10px;
`;
export const SecondBox = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
`;
export const SecondLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 254px;
`;
export const SecondRightBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LeftBoxSvg = styled.svg`
  height: 15px;
`;
export const LeftBoxText = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #242121;
`;
export const LeftSvgTextBox = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Percentage = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #242121;
  margin-left: 10px;
`;
export const SvgTextPersBox = styled.div`
  display: flex;
`;
