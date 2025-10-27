import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, SocialLoginButton, SOCIAL_PROVIDERS } from '../../components/login';
import Button from '../../components/Button';
import { COLORS, FONT_SIZES } from '../../constants/theme';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = () => {
    console.log('로그인 시도:', formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} 로그인 시도`);
  };

  const isFormValid = formData.username && formData.password;

  return (
    <Container>
      <LoginCard>
        <Title>로그인</Title>

        <FormSection>
          <InputContainer>
            <Input
              label="아이디"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </InputContainer>

          <InputContainer>
            <Input
              label="비밀번호"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </InputContainer>

          <ButtonContainer>
            <Button
              fullWidth
              onClick={handleLogin}
              disabled={!isFormValid}
            >
              계속
            </Button>
          </ButtonContainer>
        </FormSection>

        <DividerSection>
          <DividerLine />
          <OrText>OR</OrText>
          <DividerLine />
        </DividerSection>

        <SocialLoginSection>
          <SocialLoginButton
            provider={SOCIAL_PROVIDERS.GOOGLE}
            onClick={() => handleSocialLogin('구글')}
          />
          <SocialLoginButton
            provider={SOCIAL_PROVIDERS.KAKAO}
            onClick={() => handleSocialLogin('카카오')}
          />
          <SocialLoginButton
            provider={SOCIAL_PROVIDERS.NAVER}
            onClick={() => handleSocialLogin('네이버')}
          />
        </SocialLoginSection>
      </LoginCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${COLORS.background};
  padding: 20px;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: ${FONT_SIZES.large};
  font-weight: normal;
  color: ${COLORS.text.primary};
  margin: 0 0 20px 0;
`;

const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 737px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 634px;
  margin-top: 8px;
`;

const DividerSection = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 24px 0;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const OrText = styled.p`
  font-family: 'NeoDunggeunmo', sans-serif;
  font-size: ${FONT_SIZES.medium};
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0 16px;
`;

const SocialLoginSection = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default LoginPage;
