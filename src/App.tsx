/*
This is the main component of the application. It is responsible for rendering most components of the application
*/

import { useState } from 'react'; // Importing useState hook from React
import { Navbar, JoySignInSideTemplate } from './components'; // Importing components
import { Feed } from './pages'; // Importing container
import './App.css'; // Importing CSS

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
                        {/* Sign in component */}
                        <JoySignInSideTemplate
                            onSignInSuccess={handleSignInSuccess}
                        />
                    </div>
                ) : (
                    <>
                        {/* Navbar component */}
                        <Navbar
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <div className="app-layout-feed-container">
                            <Feed /> {/* Feed component */}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
