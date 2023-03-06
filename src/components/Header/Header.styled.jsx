import styled from '@emotion/styled';
import Main from '../../images/Main.jpg';

export const Section = styled.section`
  height: 1080px;
  background-image: url(${Main});
  background-size: cover;
  &::after {
    content: '';
    width: 100%;
    height: 45%;
    position: absolute;
    top: 0;
    background: linear-gradient(
      180deg,
      #01353e 0%,
      rgba(51, 51, 51, 0.595076) 31.64%,
      rgba(51, 51, 51, 0.222586) 74.35%,
      rgba(51, 51, 51, 0) 99.87%
    );
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 63px;
  margin-right: 185px;
  &:hover,
  &:focus {
    border-bottom: 2px solid red;
  }
`;

export const Navigation = styled.nav`
  z-index: 10;
`;
export const NavList = styled.ul`
  margin: 0;
  padding: 0;
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
export const Svg = styled.svg`
  display: block;
  margin: 315px auto;
  width: 20px;
  height: 69px;
`;
export const Link = styled.a`
  text-decoration: none;
  z-index: 10;
`;
