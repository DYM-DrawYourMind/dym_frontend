import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HEAD에 있던 라우팅 관련 import
import LoginPage from "./pages/login/LoginPage"; // 경로가 LoginPage.js로 바뀐 것으로 가정

// origin/mingi에 있던 새로운 import
import GlobalStyle from "./components/GlobalStyle";
import MainPage from "./pages/MainPage";
import PreparePage from "./pages/prepare.js";
import FileUploadPage from "./pages/FileUploadPage";
import ResultPage from "./pages/ResultPage.js";

function App() {
  return (
    <Router>
      {/* GlobalStyle은 보통 최상단에서 한 번만 적용합니다. App 컴포넌트 바로 아래에 둡니다. */}
      <GlobalStyle />
      <Routes>
        {/* HEAD에 있던 기존 라우트 */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* origin/mingi에 있던 새 라우트 */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/fileupload" element={<FileUploadPage />} />
        <Route path="/prepare" element={<PreparePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
