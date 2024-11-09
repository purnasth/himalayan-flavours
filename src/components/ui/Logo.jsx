import React from 'react';
import logo from '../../assets/logos/logo.svg';
import { Link } from 'react-router-dom';

const Logo = ({ aprops, className }) => {
  return (
    <Link
      to="/"
      className={aprops ? aprops : 'cursor-pointer'}
      aria-label="Himalayan Flavours"
      title="Himalayan Flavours"
    >
      <img src={logo} alt="Himalayan Flavours Logo" className={className} />
    </Link>
  );
};

export default Logo;
