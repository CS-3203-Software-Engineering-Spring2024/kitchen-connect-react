import { useState } from 'react'; // Change import statement

import { Navbar, JoySignInSideTemplate } from './components';
import { Feed } from './container';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('Home');
    const [authenticated, setAuthenticated] = useState(false); // State to manage authentication

    const handleSignInSuccess = () => {
        setAuthenticated(true);
    };

    return (
        <div className="app">
            <div className="app-layout">
                {!authenticated ? ( // Render sign-in component if not authenticated
                    <div className="app-layout-sign-in">
                        <JoySignInSideTemplate
                            onSignInSuccess={handleSignInSuccess}
                        />
                    </div>
                ) : (
                    <>
                        <Navbar
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <div className="app-layout-feed-container">
                            <Feed />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
