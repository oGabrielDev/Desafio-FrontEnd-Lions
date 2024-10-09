import React from 'react';
import logo from '../image/logo.png';
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <div
      className="
      bg-dark
      footer
      d-flex
      align-content-end
    "
    >
      <img
        src={ logo }
        alt="logo lions seminovos"
        width="80px"
        className="
        d-flex
        justify-content-center
        m-auto"
      />
    </div>
  );
}
