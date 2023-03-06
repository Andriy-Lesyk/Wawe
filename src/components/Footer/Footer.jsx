import React from 'react';
import { Footr, Logo, Link } from './Footer.styled';
import Log from '../../images/Logo.png';

function Footer() {
  return (
    <Footr>
      <Link href="#start">
        <Logo src={Log} />
      </Link>
    </Footr>
  );
}

export default Footer;
