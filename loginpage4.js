import React from 'react';
import './Login.css';

function Login({ onLogin }) {
    return (
        <div className="login-container">
            <input
                type="text"
                className="login-input"
                placeholder="ID또는 전화번호"
            />
            <input
                type="password"
                className="login-input"
                placeholder="비밀번호"
            />
            <button className="login-button" onClick={onLogin}>
                로그인
            </button>
        </div>
    );
}

export default Login;