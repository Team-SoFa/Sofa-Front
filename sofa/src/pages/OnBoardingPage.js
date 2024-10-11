import React from "react";
import "../components/Layout/header-layout.css";
import "./main-layout.css";
import Button from '../components/Button/Button';

const OnBoardingPage = () => {
    // 버튼 클릭 시 실행할 함수
    const handleNextClick = () => {
        console.log("다음 버튼 클릭됨");
        // 페이지 이동 로직을 여기에 추가할 수 있습니다
    };

    return (
        <div className="onBoardingPage">
            <header className="header">
                <img
                    className="logo"
                    src="example.png"
                    alt="logo"
                    onClick={() => window.location.reload()}
                />
            </header>

            <main className="onBoarding-main-style">
                {/* 이미지 섹션 */}
                <div className="image-section">
                    <div className="image-placeholder">
                        이미지 자리 표시지
                    </div>
                </div>

                {/* 텍스트 섹션 */}
                <div className="text-section">
                    <h1 className="slogan">기능 소개 멘트</h1>
                    <p>해당 기능에 대한 간단한 설명 및 소개 해당 기능에 대한 간단한 설명 및 소개해당 기능에 대한 간단한 설명 및 소개해당 기능에 대한 간단한 설명 및 소개해당 기능에 대한 간단한 설명</p>
                    <div className="text-button-wrapper">
                        <Button label="다음 버튼" onClick={handleNextClick} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OnBoardingPage;
