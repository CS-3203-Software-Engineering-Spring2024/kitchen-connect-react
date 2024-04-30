import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import { Navbar, JoySignInSideTemplate, Post } from './components';
import { Feed, Profile, Recipe } from './pages';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('Home');
    const [authenticated, setAuthenticated] = useState(false);

    const handleSignInSuccess = () => {
        setAuthenticated(true);
    };

    return (
        <div className="app">
            <div className="app-layout">
                {!authenticated ? (
                    <div className="app-layout-sign-in">
                        <JoySignInSideTemplate
                            onSignInSuccess={handleSignInSuccess}
                        />
                    </div>
                ) : (
                    <Router>
                        <Navbar
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <div className="app-layout-feed-container">
                            <Routes>
                                <Route path="/recipes" element={<Recipe />} />
                                <Route path="/post" element={<Post />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/" element={<Feed />} />
                            </Routes>
                        </div>
                    </Router>
                )}
            </div>
        </div>
    );
}

export default App;
