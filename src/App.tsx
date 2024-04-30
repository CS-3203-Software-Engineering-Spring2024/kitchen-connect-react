import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import { Navbar, JoySignInSideTemplate } from './components';
import { Feed, Recipe, WelcomePage } from './pages';
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
                                {' '}
                                {/* Use the Routes component here */}
                                <Route
                                    path="/recipes"
                                    element={<Recipe />}
                                />{' '}
                                {/* Define a route for the Recipe page */}
                                <Route path="/" element={<Feed />} />{' '}
                                {/* Define a route for the Feed component */}
                            </Routes>
                        </div>
                    </Router>
                )}
            </div>
        </div>
    );
}

export default App;
