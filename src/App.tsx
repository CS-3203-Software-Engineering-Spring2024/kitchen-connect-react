import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, JoySignInSideTemplate, Post } from './components';
import { Feed, Profile, Recipe, Comments } from './pages';
import './App.css';

type RecipeType = {
    image: File;
    name: string;
    tags: string[];
};

function App() {
    const [activeTab, setActiveTab] = useState('Home');
    const [authenticated, setAuthenticated] = useState(false);
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
                        />
                        <div className="app-layout-feed-container">
                            <Routes>
                      
                                <Route path="/profile/:username" element={<Profile />} />

                                <Route
                                    path="/recipes"
                                    element={<Recipe recipes={recipes} />}
                                />
                                <Route
                                    path="/post"
                                    element={<Post addRecipe={addRecipe} />}
                                />
                                <Route
                                    path="/Comments"
                                    element={<Comments />}
                                />{' '}

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
