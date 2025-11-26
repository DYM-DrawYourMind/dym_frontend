import styled from "styled-components";
import imgBox from "../../assets/images/imgBox.png";

const UploadBox = ({
    preview,
    onUpload,
    onFileChange,
    fileInputRef,
    defaultImage = imgBox,
}) => {
    return (
        <BoxContainer>
            <ImgBox
                src={preview || defaultImage}
                alt="이미지박스"
                onClick={onUpload}
            />
            <HiddenInput
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={onFileChange}
            />
        </BoxContainer>
    );
};

export default UploadBox;

const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
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