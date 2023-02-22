import styled from '@emotion/styled';

export const Section = styled.section`
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionTitleBox = styled.div`
  margin-bottom: 183px;
  display: flex;
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
export const ImgList = styled.ul`
  display: flex;
`;
export const ImgItemCart = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  &:not(:last-child) {
    margin-right: 105px;
  }
`;
export const CartImg = styled.img``;
export const CartName = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #242121;
  margin-top: 25px;
`;
export const CartPosition = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #242121;
  margin-top: 5px;
`;
