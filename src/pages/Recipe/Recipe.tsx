import React from 'react';
import { anhnguyen, burgerWithLettuce, whiteDimSum } from '../../assets';
import './recipe.css';

interface Recipe {
    name: string;
    image: string;
}

const groupedRecipes: Recipe[] = [
    { name: 'Vegetarian', image: anhnguyen },
    { name: 'Burgers', image: burgerWithLettuce },
    { name: 'Dim Sum', image: whiteDimSum },
];

const ungroupedRecipes: Recipe[] = [
    { name: 'Vegetarian', image: anhnguyen },
    { name: 'Vegetarian', image: anhnguyen },
    { name: 'Vegetarian', image: anhnguyen },
    { name: 'Burgers', image: burgerWithLettuce },
    { name: 'Dim Sum', image: whiteDimSum },
];

const Recipe: React.FC = () => {
    return (
        <div className="recipe-page-container">
            <h2 className="recipe-page-container-title">Collections</h2>
            <div className="recipe-grid">
                {groupedRecipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <div className="recipe-card-inner">
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="recipe-image"
                            />
                            <p className="recipe-name">{recipe.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="recipe-page-container-title">Recipes</h2>
            <div className="recipe-grid">
                {ungroupedRecipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <div className="recipe-card-inner">
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="recipe-image"
                            />
                            <p className="recipe-name">{recipe.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipe;
