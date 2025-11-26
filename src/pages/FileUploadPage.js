import styled from "styled-components";
import imgBox from "../assets/images/imgBox.png";
import { useFileUpload } from "../hooks/fileUpload/useFileUpload";
import UploadBox from "../components/fileUpload/UploadBox";
import ResultButton from "../components/fileUpload/ResultBox";

const FileUploadPage = () => {
    const {
        fileInputRef,
        preview,
        handleUpload,
        handleFileChange,
        goToResult,
    } = useFileUpload();

    return (
        <UploadPageContainer>
            사진 업로드
            <UploadBox
                preview={preview}
                onUpload={handleUpload}
                onFileChange={handleFileChange}
                fileInputRef={fileInputRef}
                defaultImage={imgBox}
            />
            {preview && <ResultButton onClick={goToResult} />}
        </UploadPageContainer>
    );
};

export default FileUploadPage;

const UploadPageContainer = styled.div`
    text-align: center;
    background-color: transparent;
    font-size: 60px;
    margin-top: 58px;
`;