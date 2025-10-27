import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, variant = 'primary', fullWidth = false, disabled = false }) => {
  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      $fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  max-width: ${props => props.$fullWidth ? '634px' : 'none'};
  height: 87px;
  background-color: ${props => {
    if (props.disabled) return '#999';
    return props.$variant === 'primary' ? '#695252' : '#cec69e';
  }};
  border: none;
  border-radius: 50px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 40px;
  color: white;
  transition: all 0.2s ease;
  margin: 0 auto;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    opacity: 0.95;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
