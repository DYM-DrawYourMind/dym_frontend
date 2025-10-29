import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import MainPage from "./pages/MainPage"
import FileUploadPage from './pages/FileUploadPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fileUpload" element={<FileUploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
