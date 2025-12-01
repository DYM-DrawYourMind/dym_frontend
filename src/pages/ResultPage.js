import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ResultPage = () => {
  const location = useLocation();

  const { imageUrl, analysisResult } = location.state || {};

  // 데이터가 없을 때 보여줄 기본값
  const displayImage =
    imageUrl || "https://placehold.co/600x600/e0e0e0/a0a0a0?text=%20";
  const displayText = analysisResult || "텍스트";

  return (
    <PageWrapper>
      <ResultContainer>
        <MainTitle>테스트 결과</MainTitle>

        <ContentWrapper>
          {/* 왼쪽: 이미지 섹션 */}
          <ImageSection>
            <ImageBox>
              <ResultImage
                src={displayImage}
                alt="분석된 이미지"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x600/e0e0e0/a0a0a0?text=%20";
                }}
              />
              {/* 이미지가 없을 때만 산 아이콘 표시 (선택 사항) */}
              {!imageUrl && <ImageIcon>⛰️</ImageIcon>}
            </ImageBox>
          </ImageSection>

          {/* 오른쪽: 텍스트 및 이메일 섹션 */}
          <TextSection>
            {/* 분석 결과 텍스트 상자 */}
            <ResultCard>{displayText}</ResultCard>

            {/* 하단: Gmail 알림 박스 */}
            <EmailNotification>
              <CloseButton>&times;</CloseButton>
              <NotificationContent>
                <NotificationText>
                  자세한 결과는 이메일에서
                  <br />
                  확인 가능합니다!
                </NotificationText>

                <GmailButton
                  href={`mailto:?subject=[감정분석결과]&body=${encodeURIComponent(
                    displayText
                  )}`}
                >
                  <span>gmail로 검사 결과 받기</span>
                  <GmailIcon
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                    alt="Gmail"
                  />
                </GmailButton>
              </NotificationContent>
            </EmailNotification>
          </TextSection>
        </ContentWrapper>
      </ResultContainer>
    </PageWrapper>
  );
};

export default ResultPage;

/* ---------------- Styled Components ---------------- */

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
`;

const ResultContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: normal;
  color: #5d4c46;
  margin-bottom: 10px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    min-height: 500px;
  }
`;

/* --- 왼쪽 이미지 영역 --- */
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  background: #ffffff; /* 흰색 박스 */
  border-radius: 20px;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ResultImage = styled.img`
  width: 80%; /* 박스 안 여백을 위해 크기 조절 */
  height: 80%;
  object-fit: contain;
`;

const ImageIcon = styled.div`
  position: absolute;
  font-size: 80px;
  opacity: 0.2;
  filter: grayscale(100%);
`;

/* --- 오른쪽 텍스트 영역 --- */
const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`;

const ResultCard = styled.div`
  background: #ffffff; /* 흰색 박스 */
  padding: 40px;
  border-radius: 20px;
  font-size: 25px;
  color: #5d4c46;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-line;
  line-height: 1.6;
`;

/* --- Gmail 알림 박스 --- */
const EmailNotification = styled.div`
  background: #ffffff; /* 흰색 박스 */
  border-radius: 20px;
  padding: 20px 24px;
  position: relative;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #a0a0a0;
  cursor: pointer;
`;

const NotificationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* 텍스트와 버튼 하단 정렬 */
  width: 100%;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const NotificationText = styled.div`
  font-size: 16px;
  color: #5d4c46;
  line-height: 1.5;
  font-weight: normal;
`;

const GmailButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;
  background: transparent;

  span {
    font-size: 14px;
    color: #5d4c46;
  }

  &:hover span {
    text-decoration: underline;
  }
`;

const GmailIcon = styled.img`
  width: 24px;
  height: 24px;
`;
