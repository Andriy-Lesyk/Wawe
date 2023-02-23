import React from 'react';
import { Footr, Logo } from './Footer.styled';
import Log from '../../images/Logo.png';

function Footer() {
  return (
    <Footr>
      <Logo src={Log} />
    </Footr>
  );
}

export default Footer;
