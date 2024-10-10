import React from 'react';
import logo from '../image/logo.png';
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <footer
      className="
      bg-dark
      footer
      d-flex
    "
    >
      <img
        src={ logo }
        alt="logo lions seminovos"
        width="80px"
        className="
        m-auto"
      />
    </footer>
  );
}
