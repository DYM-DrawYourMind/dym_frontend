import GlobalStyle from "./components/GlobalStyle";
import MainPage from "./pages/MainPage"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </>

  );
}

export default App;
