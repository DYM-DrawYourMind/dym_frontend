import styled from "styled-components";
import imgBox from "../assets/images/imgBox.png"
import { useRef, useState } from "react";

const FileUploadPage = () => {
    const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);


  const handleUpload = () => {
    fileInputRef.current.click();
  }

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <UploadPageContainer>
      사진 업로드
      <BoxContainer>
        <ImgBox src={preview || imgBox} alt="이미지박스" onClick={handleUpload} />
        <HiddenInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
      </BoxContainer>
    </UploadPageContainer>
  )
}

export default FileUploadPage;

const UploadPageContainer = styled.div`
  text-align: center;
  background-color: transparent;
  font-size: 60px;
  margin-top: 58px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content : center;
`;

const ImgBox = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 203px;
  `;

const HiddenInput = styled.input`
  display: none;
`;