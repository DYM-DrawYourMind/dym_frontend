import React from 'react';  
import styled from "styled-components";

// [수정됨] 불필요한 import 삭제함

const ResultBox = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      심리 분석 결과 보기 ➡️
    </ButtonContainer>
  );
};

export default ResultBox;

const ButtonContainer = styled.div`
    position: absolute;
    top: 650px;
    left: 50%;
    transform: translateX(-50%);
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 40px;
    
    font-family: 'NeoDunggeunmo', sans-serif;
    font-size: 24px;
    color: white;
    background-color: #8B4513; 
    
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 10;
    
    &:hover {
        background-color: #A0522D;
        transform: translateX(-50%) scale(1.05);
    }
`;