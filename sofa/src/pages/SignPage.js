import React, { useState } from "react";
import "../components/Layout/header-layout.css";
import "./main-layout.css";
import Button from '../components/Button/Button';

const ImagePlaceholder = ({ width, height }) => {
    const placeholderStyle = {
         width: `${width}px`,
        height: `${height}px`,
    };

    return (
        <div className="image-placeholder" style={placeholderStyle}>
            이미지 자리 표시지
        </div>
    )
}

const SignPage = () => {
    return (
        <div className="SignPage">
            <header className="header">
                <img
                    className="logo"
                    src="example.png"
                    alt="logo"
                    onClick={() => window.location.reload()}
                />
            </header>
            <main className="sign-main-style">
                <div className="image-section">
                    <ImagePlaceholder width={362} height={320} /> {/* 여기서 크기 설정 */}
                </div>
                <div className="text-section">
                    <h1 className="sign-slogan">서비스 메인 슬로건 코멘트</h1>
                    <p>서비스 서브 슬로건 및 기타 설명</p>
                    <div className="sign-text-button-wrapper">
                        <Button label="Google 계정으로 로그인" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignPage;
