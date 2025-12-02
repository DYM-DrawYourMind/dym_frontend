import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
// 파일 위치에 따라 경로를 맞춰주세요 (현재 login 폴더 안이라면 ../../ 가 맞습니다)
import { BACKEND_URL } from "../constants/config"; 

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. 백엔드에서 넘어온 데이터 받기
  const resultData = location.state?.result;

  // 2. 데이터가 없을 경우 (잘못된 접근 처리)
  if (!resultData) {
    return (
      <PageWrapper>
        <ResultContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Title>분석 결과가 없습니다.</Title>
          <Button onClick={() => navigate('/fileupload')}>다시 검사하기</Button>
        </ResultContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ResultContainer>
        {/* 왼쪽: 이미지 섹션 */}
        <ImageSection>
          <ImageBox>
            <ResultImage
              // 백엔드 주소 + 이미지 파일 경로 결합
              src={`${BACKEND_URL}${resultData.image_url}`}
              alt="분석된 이미지"
              onError={(e) => {
                e.target.onerror = null;
                // 이미지가 깨질 경우 보여줄 대체 이미지
                e.target.src = "https://placehold.co/400x400?text=Image+Error";
              }}
            />
          </ImageBox>
        </ImageSection>

        {/* 오른쪽: 텍스트 섹션 */}
        <TextSection>
          <Title>검사 결과</Title>

          <ResultCard>
            {/* AI가 분석한 텍스트가 여기에 나옵니다 */}
            {resultData.analysis}
          </ResultCard>

          {/* 메인으로 돌아가는 버튼 추가 */}
          <ButtonContainer>
            <Button onClick={() => navigate('/main')}>메인으로 돌아가기</Button>
          </ButtonContainer>
        </TextSection>
      </ResultContainer>
    </PageWrapper>
  );
};

export default ResultPage;

/* ---------------- Styled Components (원본 유지 + 일부 추가) ---------------- */

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const ResultContainer = styled.div`
  background: transparent; /* 배경색 필요하면 #f9f9f9 등으로 변경 */
  width: 100%;
  max-width: 1100px;
  min-height: 700px;
  border-radius: 40px;
  /* box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); 배경이 투명하면 그림자가 어색할 수 있음 */
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start; /* 텍스트가 길어질 수 있으므로 상단 정렬 */
  }
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1; /* 공간 분배 */
`;

const ImageBox = styled.div`
  background: #f0f0f0;
  padding: 24px;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1; /* 공간 분배 */
  justify-content: center;
`;

const Title = styled.h1`
  font-family: 'NeoDunggeunmo', sans-serif; /* 폰트 적용 */
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #333;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const ResultCard = styled.div`
  background: #f4f4f6;
  padding: 30px;
  border-radius: 20px;
  font-size: 18px;
  line-height: 1.8; /* 가독성을 위해 줄간격 늘림 */
  color: #333;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  white-space: pre-wrap; /* 줄바꿈 문자(\n)가 있을 경우 반영 */
  min-height: 200px; /* 최소 높이 확보 */
`;

/* 버튼 디자인 추가 */
const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
`;

const Button = styled.button`
  background-color: #8B4513; /* 갈색 테마 */
  color: white;
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: 20px;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    background-color: #A0522D;
    transform: scale(1.05);
  }
`;