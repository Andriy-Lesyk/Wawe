import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 200px 0;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
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
  line-height: 56px;
  letter-spacing: 0.6px;
  color: #01353e;
`;
export const ServiciesList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 183px;
`;
export const ServiceCard = styled.li`
  margin: 0;
  padding: 0 30px 45px;
  width: 360px;
  list-style-type: none;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardName = styled.h3`
  margin: 35px 0 58px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  color: #01353e;
`;
export const CardText = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #242121;
  align-self: flex-start;
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;
export const CardPrice = styled.span`
  margin-top: 61px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  color: #01353e;
`;
