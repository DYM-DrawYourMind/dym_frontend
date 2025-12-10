import React from "react";
import styled from "styled-components";
import prepareImg from "../assets/images/prepare.jpg";
// 이미지의 프레임과 배경을 표현하는 컨테이너
const Frame = styled.div`
  width: 800px;
  height: 600px;
  margin: 50px auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 배경색이 필요하다면 아래 주석을 해제하고 사용하세요 (이미지 기준 색상) */
  /* background-color: #D3Ceb4; */
`;

const MainText = styled.p`
  /* NeoDGM 폰트 적용 가정 */
  font-size: 32px;

  margin-bottom: 20px; /* 이미지와의 간격을 위해 조절 */
  text-align: center;
`;

// ✨ 새로 추가된 이미지 스타일
const ExampleImage = styled.img`
  width: 400px; /* 시안에 맞춰 적절한 크기 설정 */
  height: 280px; /* 시안에 맞춰 적절한 크기 설정 */
  background-color: #ffffff;
  border-radius: 30px; /* 둥근 모서리 처리 */
  object-fit: cover; /* 이미지가 비율을 유지하며 들어가도록 설정 */
  margin: 20px 0; /* 위아래 텍스트와의 간격 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 살짝 그림자를 주어 입체감 (선택사항) */
`;
const ImageExplain = styled.p`
  font-size: 25px;

  margin-top: 10px; /* 이미지와의 간격을 위해 조절 */
  text-align: center;
`;
const SubjectText = styled.p`
  font-size: 32px;

  margin-top: 20px; /* 이미지와의 간격을 위해 조절 */
  text-align: center;
`;

function App() {
  return (
    <>
      <Frame>
        <MainText>연필과 A4용지를 준비해주세요!</MainText>

        {/* 👇 여기에 실제 사용할 예시 이미지 경로를 src에 넣어주세요 */}
        <ExampleImage src={prepareImg} alt="예시 그림" />
        <ImageExplain>(예시 이미지)</ImageExplain>
        <SubjectText>집,나무,사람을 그려주세요</SubjectText>
      </Frame>
    </>
  );
}

export default App;
