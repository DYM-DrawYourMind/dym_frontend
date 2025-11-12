import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles"; // 전역 스타일 import

// 이미지의 프레임과 배경을 표현하는 컨테이너
const Frame = styled.div`
  /* 프레임 스타일 */
  width: 800px; /* 적절한 크기로 조정 */
  height: 600px;
  background-color: #e5e5c2;
  margin: 50px auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.p`
  /* body에 폰트가 적용되어 있으므로 별도 지정 불필요하지만, 명시적으로 'NeoDGM' 사용 */
  font-family: "NeoDGM", sans-serif;
  font-size: 32px;
  color: #5d5d5d;
  margin-bottom: 50px;
  text-align: center;
`;

const SubjectText = styled.p`
  /* '주제' 텍스트는 좀 더 굵거나 다른 폰트를 사용해 강조할 수 있습니다. */
  font-family: "NeoDGM", sans-serif;
  font-size: 32px;
  color: #5d5d5d;
  margin-top: 50px; /* MainText 아래에 여백 추가 */
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyles /> {/* ⭐ 가장 중요! 전역 스타일을 적용합니다. */}
      <Frame>
        <MainText>연필과 A4용지를 준비해주세요!</MainText>
        <SubjectText>주제: 나무</SubjectText>
      </Frame>
    </>
  );
}

export default App;
