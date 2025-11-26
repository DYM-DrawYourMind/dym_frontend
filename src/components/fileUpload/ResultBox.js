import styled from "styled-components";

const ResultButton = ({onClick}) => {
  return <Button onClick = {onClick}>결과 확인</Button>;
};

export default ResultButton;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 450px;
    width: 30%;
    padding : 24px 48px;
    font-size: 24px;
    border : none;
    border-radius: 10px;
    cursor : pointer;
    background-color: #4CAF50;
    color: white;
`;