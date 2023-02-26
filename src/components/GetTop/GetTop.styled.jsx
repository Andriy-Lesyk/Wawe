import styled from '@emotion/styled';

export const Section = styled.section`
  padding-bottom: 200px;
  position: relative;
  margin-top: 332px;
`;
export const GetTopPictureBox = styled.div`
  display: flex;
`;

export const GetTopBox = styled.div`
  margin-top: 200px;
  width: 50%;
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
  position: absolute;
  right: 0;
  width: 50%;
  height: 40%;
`;
export const GalleryBox = styled.div`
  margin-top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 50px;
  &:hover,
  &:focus {
    border: 2px solid;
  }
`;
export const ChooseImgList = styled.ul`
  padding: 0;
  margin: 0;
  margin: 183px 0 50px;
  display: flex;
  align-self: flex-start;
`;
export const ChooseImgItem = styled.li`
  margin: 0;
  list-style-type: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.6px;
  color: #242121;
  &:hover,
  &:focus {
    color: #00b2a0;
  }
`;
