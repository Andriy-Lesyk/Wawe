import styled from '@emotion/styled';
import Main from '../../images/Main.jpg';

export const Section = styled.section`
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  background-image: url(${Main});
`;

export const Img = styled.img`
  width: 60px;
  height: 63px;
  margin-right: 185px;
`;

export const Navigation = styled.nav``;
export const NavList = styled.ul`
  display: flex;
`;
export const NavItem = styled.li`
  list-style-type: none;
  &:not(:last-child) {
    margin-right: 45px;
  }
`;
export const NavItemLink = styled.a`
  text-decoration: none;
`;
export const HeadContainer = styled.div`
  width: max-content;
  margin-left: 360px;
  padding-top: 35px;
  display: flex;
  align-items: center;
`;
export const NavItemName = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: white;
  padding-bottom: 5px;
  &:hover {
    border-bottom: 1px solid #00b2a0;
  }
`;
export const Title = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  color: #0d302c;
  margin: auto;
`;
export const Text = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: black;
`;
export const TitleBox = styled.div`
  width: max-content;
  height: 235px;
  margin: 261px auto 0;
`;
export const TextBox = styled.div`
  margin: 0 auto;
  width: max-content;
`;
