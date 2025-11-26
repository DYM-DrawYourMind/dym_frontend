import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useFileUpload = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
            setSelectedFile(file);
        }
    };
    const goToResult = async () => {
        if (!selectedFile) {
            alert("파일을 업로드해주세요!");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("api/~~", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("서버 응답 :", response.data);
            alert("결과 페이지로 이동합니다!");

            navigate("/result", { state: { result: response.data } });
        } catch (error) {
            console.error("업로드 실패 :", error);
            alert("업로드 중 오류가 발생 했습니다.");
        }
    };

    return {
        fileInputRef,
        preview,
        handleUpload,
        handleFileChange,
        goToResult,
    };
};