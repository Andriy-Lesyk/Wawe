import React from 'react';
import Container from 'components/Container/Container';
import {
  VideoBox,
  StatListBox,
  StatItemBox,
  StatValue,
  StatName,
  Vid,
} from './Video.styled';
import Wawe from '../../images/Wawe.mp4';
import Post from '../../images/Poster.jpg';

function Video() {
  return (
    <Container>
      <VideoBox>
        <Vid src={Wawe} controls="controls" poster={Post}></Vid>
      </VideoBox>
      <StatListBox>
        <StatItemBox>
          <StatValue>450</StatValue>
          <StatName>туристов</StatName>
        </StatItemBox>
        <StatItemBox>
          <StatValue>2500</StatValue>
          <StatName>часов катания</StatName>
        </StatItemBox>
        <StatItemBox>
          <StatValue>10</StatValue>
          <StatName>проф. тренеров</StatName>
        </StatItemBox>
        <StatItemBox>
          <StatValue>365</StatValue>
          <StatName>дней в году</StatName>
        </StatItemBox>
      </StatListBox>
    </Container>
  );
}

export default Video;
