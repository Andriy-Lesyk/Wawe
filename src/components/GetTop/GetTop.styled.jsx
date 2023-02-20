import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 332px auto 0;
  width: 1920px;
`;
export const GetTopPictureBox = styled.div`
  display: flex;
  margin-left: 360px;
`;

export const GetTopBox = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
`;

export const GetTopTitleBox = styled.div`
  display: flex;
`;

export const GetTopTitle = styled.h2`
  margin: 0;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.6px;
  color: #01353e;
`;
export const GetTopText = styled.p`
  margin: 0;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #242121;
  padding-right: 52px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const GetTopImg = styled.img`
  width: 960px;
  height: 850px;
  margin-left: 40px;
`;
export const GalleryBox = styled.div`
  padding: 200px 360px;
`;
export const Gallary = styled.div``;
export const GallaryImg = styled.img`
  &:not(:nth-child(3n)) {
    margin-right: 40px;
  }
  &:nth-last-child(-n + 3) {
    margin-top: 40px;
  }
`;
export const GallaryBtn = styled.button`
  width: 350px;
  height: 70px;
  border: 1px solid #c4c4c4;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 18px;
  color: #242121;
  display: block;
  margin: 50px auto 0;
`;
