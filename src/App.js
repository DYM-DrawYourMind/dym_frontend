import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HEAD에 있던 라우팅 관련 import
import LoginPage from "./pages/login/LoginPage";

// origin/mingi에 있던 새로운 import
import GlobalStyle from "./components/GlobalStyle";
import MainPage from "./pages/MainPage";
import PreparePage from "./pages/prepare.js";
import FileUploadPage from "./pages/FileUploadPage";
import ResultPage from "./pages/ResultPage.js";

function App() {
  
  // ==============================================
  // 로그인 후 페이지 이동 로직
  // ==============================================
  useEffect(() => {
    // 1. 주소창에 있는 ?user_id=... 찾기
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("user_id");
    const token = params.get("token");

    // 2. user_id가 발견되면 저장하고 이동!
    if (userId) {
      localStorage.setItem("user_id", userId);
      if (token) localStorage.setItem("token", token);
      
      console.log("✅ 로그인 성공! User ID 저장완료:", userId);

      // 3. 주소창 정리
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // 🚀 [여기가 핵심] 저장이 끝났으면 '파일 업로드' 페이지로 강제 이동시킵니다!
      // (원하시는 페이지가 /main 이라면 /main으로 바꾸세요)
      window.location.href = "/fileupload"; 
    }
  }, []);
  // ==============================================


  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/main" element={<MainPage />} />
        <Route path="/fileupload" element={<FileUploadPage />} />
        <Route path="/prepare" element={<PreparePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;