import React from 'react';
import './FileManager.css';

function FileManager() {
    return (
        <div className="file-manager-container">
            <div className="file-section">
                <div className="file-block">이미지</div>
                <button className="file-button">다운로드</button>
                <button className="file-button">업로드</button>
            </div>
            <div className="file-section">
                <div className="file-block">파일</div>
                <button className="file-button">다운로드</button>
                <button className="file-button">업로드</button>
            </div>
        </div>
    );
}

export default FileManager;