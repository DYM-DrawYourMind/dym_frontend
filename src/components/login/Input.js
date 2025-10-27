import React, { useState } from 'react';
import styled from 'styled-components';

const Input = ({ label, type = 'text', placeholder, value, onChange, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper>
      <StyledInput
        type={type}
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        $isFocused={isFocused}
        aria-label={label}
        autoComplete="off"
      />
      {!value && !isFocused && <Label>{label}</Label>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 737px;
  height: 117px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid ${props => props.$isFocused ? '#695252' : 'transparent'};
  border-radius: 50px;
  padding: 0 40px;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 40px;
  color: #535353;
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: transparent;
  }

  &:focus::placeholder {
    color: #53535366;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 40px;
  color: #535353;
  opacity: 0.6;
  pointer-events: none;
  transition: all 0.2s ease;
`;

export default Input;
