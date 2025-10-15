import { createGlobalStyle } from "styled-components";

// 1. 폰트 파일 import
import NeoDGMFont from "./assets/fonts/neodgm.ttf";
import NeoDunggeunmoProRegular from "./assets/fonts/NeoDunggeunmoPro-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  /* 폰트 정의: NeoDGM */
  @font-face {
    font-family: 'NeoDGM';
    src: local('NeoDGM'),
         url(${NeoDGMFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* 폰트 로딩 중 깜빡임 방지 */
  }

  /* 폰트 정의: NeoDunggeunmoPro (보조 폰트) */
  @font-face {
    font-family: 'NeoDunggeunmoPro';
    src: local('NeoDunggeunmoPro-Regular'),
         url(${NeoDunggeunmoProRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* 전역 기본 스타일 및 폰트 적용 */
  body {
    /* 프로젝트 전체의 기본 폰트로 'NeoDGM'을 지정 */
    font-family: 'NeoDGM', sans-serif;
    line-height: 1.5; /* 가독성을 위해 기본 line-height 지정 */
    background-color: #e5e5c2; /* 이미지의 배경색과 유사하게 설정 */
  }
`;

export default GlobalStyles;
