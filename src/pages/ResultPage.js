import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ResultPage = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setUploadedImageUrl(storedImage);
    }
  }, []);

  return (
    <PageWrapper>
      <ResultContainer>
        <ImageSection>
          <ImageBox>
            <ResultImage
              src={uploadedImageUrl}
              alt="업로드 이미지"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x400/f0f0f0/888?text=Image+Not+Found";
              }}
            />
          </ImageBox>
        </ImageSection>

        <TextSection>
          <Title>검사 결과</Title>

          <ResultCard>
            업로드된 이미지를 기반으로 분석한 결과를 여기에 표시할 수 있습니다.
            <br />
            현재는 이미지 표시 기능만 구현되어 있습니다.
          </ResultCard>
        </TextSection>
      </ResultContainer>
    </PageWrapper>
  );
};

export default ResultPage;

/* ---------------- Styled Components ---------------- */

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent; /* ← 수정 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const ResultContainer = styled.div`
  background: transparent;
  width: 100%;
  max-width: 1100px;
  min-height: 700px;
  border-radius: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  background: #f0f0f0;
  padding: 24px;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 95%;
  max-width: 550px;
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
`;

const Title = styled.h1`
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
  padding: 24px;
  border-radius: 20px;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.08);
`;
