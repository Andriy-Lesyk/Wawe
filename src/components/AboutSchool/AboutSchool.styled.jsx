import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 189px 0 200px 0;
`;
export const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  color: #01353e;
  &::after {
    content: '';
    //display: block;
    height: 85px;
    width: 48px;
    background-color: #00b2a0;
  }
`;
export const TextBoxesContainer = styled.div`
  margin-top: 64px;
  display: flex;
`;
export const TextBox = styled.div`
  width: 480px;
  &:not(:last-child) {
    margin-right: 120px;
  }
`;
export const Text = styled.p`
  margin: 0;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #242121;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const SectionTitleBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const Slash = styled.svg`
  width: 48px;
  height: 85px;
`;
