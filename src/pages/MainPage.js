import styled from "styled-components";
import pen from "../assets/images/pen.png"
import ellipse from "../assets/images/Ellipse2.png"
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  }

  return (
    <MainPageContainer>
      WELCOME ! <br />
      Draw Your Mind
      <ButtonContainer>
        <EllipseButton src={ellipse} alt="원버튼" onClick={handleClick} />
        <PenButton src={pen} alt="펜버튼"onClick={handleClick} />
      </ButtonContainer>
    </MainPageContainer>
  )
}

export default MainPage;

const MainPageContainer = styled.div`
  text-align: center;
  background-color: transparent;
  font-size: 100px;
  margin-top: 218px;
`;

const ButtonContainer = styled.div`
  display : flex;
  justify-content : center;
`;

const EllipseButton = styled.img`
  position: absolute;
  height: 235px;
  top: 508px;
  left:50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const PenButton = styled.img`
  position: absolute;
  height: 177px;
  top: 542px;
  left:50%;
  transform: translateX(-50%);
  cursor: pointer;
`;