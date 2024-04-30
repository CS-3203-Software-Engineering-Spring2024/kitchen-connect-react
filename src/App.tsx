import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, JoySignInSideTemplate, Post } from './components';
import { Feed, Profile, Recipe, Instructions } from './pages';
import './App.css';

type RecipeType = {
    image: File;
    name: string;
    tags: string[];
};

function App() {

    const [activeTab, setActiveTab] = useState('Home');
    const [authenticated, setAuthenticated] = useState(localStorage.getItem('jwt') !== null);
    const [recipes, setRecipes] = useState<RecipeType[]>([]);

    const handleSignInSuccess = () => {
        setAuthenticated(true);
    };

    const addRecipe = (newRecipe: RecipeType) => {
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
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
                        signOut={setAuthenticated}
                    />
                    <div className="app-layout-feed-container">
                        <Routes>
                            <Route path="/profile/:username" element={<Profile />} />
                            <Route path="/recipes" element={<Recipe recipes={recipes} />} />
                            <Route path="/recipe/:recipeID" element={<Instructions />} />
                            <Route path="/post" element={<Post addRecipe={addRecipe} />} />
                            <Route path="/" element={<Feed />} />

                            {/* Redirect to the homepage or any specific route if authenticated */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </div>
                </Router>)}

                

            </div>
        </div>
    );
}

export default App;
