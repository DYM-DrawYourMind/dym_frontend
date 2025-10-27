import React from 'react';
import styled from 'styled-components';

const SOCIAL_PROVIDERS = {
  GOOGLE: 'google',
  KAKAO: 'kakao',
  NAVER: 'naver'
};

const SocialLoginButton = ({ provider, onClick }) => {
  const getIconPath = () => {
    switch (provider) {
      case SOCIAL_PROVIDERS.GOOGLE:
        return '/google.png';
      case SOCIAL_PROVIDERS.KAKAO:
        return '/kakao.png';
      case SOCIAL_PROVIDERS.NAVER:
        return '/naver.png';
      default:
        return '';
    }
  };

  const getProviderName = () => {
    switch (provider) {
      case SOCIAL_PROVIDERS.GOOGLE:
        return '구글';
      case SOCIAL_PROVIDERS.KAKAO:
        return '카카오';
      case SOCIAL_PROVIDERS.NAVER:
        return '네이버';
      default:
        return '';
    }
  };

  return (
    <Button onClick={onClick} aria-label={`${getProviderName()} 로그인`}>
      <Icon src={getIconPath()} alt={`${getProviderName()} 아이콘`} />
    </Button>
  );
};

const Button = styled.button`
  width: 80px;
  height: 80px;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

export default SocialLoginButton;
export { SOCIAL_PROVIDERS };
