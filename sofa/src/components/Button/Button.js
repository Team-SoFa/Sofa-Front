// src/components/Button.js
import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button', className }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;