import React, { useState } from 'react';
import Login from './Login';
import FileManager from './FileManager';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            {isLoggedIn ? <FileManager /> : <Login onLogin={handleLogin} />}
        </div>
    );
}

export default App;