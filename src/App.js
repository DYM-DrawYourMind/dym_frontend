import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import GlobalStyle from "./components/GlobalStyle";
import MainPage from "./pages/MainPage";
import PreparePage from "./pages/prepare.js";
import FileUploadPage from "./pages/FileUploadPage";
import ResultPage from "./pages/ResultPage.js";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/prepare" element={<PreparePage />} />
        <Route path="/fileupload" element={<FileUploadPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
