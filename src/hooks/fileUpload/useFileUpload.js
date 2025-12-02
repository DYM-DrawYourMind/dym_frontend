import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants/config"; // 1. 설정해둔 백엔드 주소 불러오기

export const useFileUpload = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    // 숨겨진 input 클릭 트리거
    const handleUpload = () => {
        fileInputRef.current.click();
    };

    // 파일 선택 시 미리보기 생성 및 파일 저장
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
            setSelectedFile(file);
        }
    };

    // [핵심] 분석 요청 및 결과 페이지 이동
    const goToResult = async () => {
        // 1. 파일 선택 여부 확인
        if (!selectedFile) {
            alert("파일을 업로드해주세요!");
            return;
        }

        // 2. 로그인 여부 확인 (localStorage에서 ID 꺼내기)
        const userId = localStorage.getItem("user_id");
        if (!userId) {
            alert("로그인이 필요한 서비스입니다. 먼저 로그인해주세요!");
            // 필요 시 로그인 페이지로 이동
            // navigate("/login"); 
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile); // 백엔드가 받는 이름 'file'

        try {
            // 3. 백엔드로 전송
            // 주소 예시: http://127.0.0.1:8000/analyze?user_id=1
            const response = await fetch(`${BACKEND_URL}/analyze?user_id=${userId}`, {
                method: "POST",
                body: formData,
                // fetch는 FormData 전송 시 Content-Type 헤더를 자동으로 설정하므로 생략합니다.
            });

            if (!response.ok) {
                throw new Error("분석 요청 실패");
            }

            const data = await response.json();
            console.log("서버 응답 :", data);
            
            // 4. 결과 페이지로 이동 (데이터 들고 가기)
            // data.result 안에 detection(객체정보), analysis(심리분석), image_url 등이 들어있습니다.
            navigate("/result", { state: { result: data.result } });

        } catch (error) {
            console.error("업로드 실패 :", error);
            alert("분석 중 오류가 발생했습니다.");
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