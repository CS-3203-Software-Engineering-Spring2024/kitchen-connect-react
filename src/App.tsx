import { useState } from 'react';
import { Navbar, JoySignInSideTemplate } from './components';
import { Feed } from './container';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('Home'); // State to manage active tab

    return (
        <div className="app">
            <div className="app-layout">
                <div className="app-layout-sign-in">
                    <JoySignInSideTemplate />
                </div>
                <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />{' '}
                <Feed />
            </div>
        </div>
    );
}

export default App;
