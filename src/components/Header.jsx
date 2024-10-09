import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import '../Styles/Header.css';

export default function Header() {
  return (
    <header className="head bg-danger">
      <div className="logo">
        <img src={ logo } alt="logo lions seminovos" width="80px" />
      </div>
      <nav className="navbar">
        <Link to="/" className="link">Home</Link>
        <Link to="/contato" className="link">Contato</Link>
      </nav>
    </header>
  );
}
