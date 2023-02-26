import React from 'react';
import Logo from '../../images/Logo.png';
import Container from 'components/Container/Container';
import {
  Section,
  HeadContainer,
  Img,
  Navigation,
  NavList,
  NavItem,
  NavItemLink,
  NavItemName,
  TitleBox,
  Title,
  TextBox,
  Text,
  Svg,
} from './Header.styled';
import sprite from '../../images/sprite.svg';

function Header() {
  return (
    <Section>
      <Container>
        <HeadContainer>
          <Img src={Logo} alt="picture" />
          <Navigation>
            <NavList>
              <NavItem>
                <NavItemLink href="#">
                  <NavItemName>О нас</NavItemName>
                </NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#">
                  <NavItemName>Услуги</NavItemName>
                </NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#">
                  <NavItemName>Стоимость</NavItemName>
                </NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#">
                  <NavItemName>Блог</NavItemName>
                </NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#">
                  <NavItemName>Команда</NavItemName>
                </NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#">
                  <NavItemName>Контакты</NavItemName>
                </NavItemLink>
              </NavItem>
            </NavList>
          </Navigation>
        </HeadContainer>
        <TitleBox>
          <Title>WAWE</Title>
        </TitleBox>
        <TextBox>
          <Text>Школа серфинга на канарских Островах</Text>
        </TextBox>
        <Svg>
          <use href={sprite + '#Icon'} />
        </Svg>
      </Container>
    </Section>
  );
}

export default Header;
