import React from 'react';
import { anhnguyen, burgerWithLettuce, whiteDimSum } from '../../assets';
import './recipe.css';

interface Recipe {
    name: string;
    image: string;
}

const recipes: Recipe[] = [
    // Add your recipes collection here
    { name: 'Vegetarian', image: anhnguyen },
    { name: 'Burgers', image: burgerWithLettuce },
    { name: 'Dim Sum', image: whiteDimSum },
];

const Recipe: React.FC = () => {
    return (
        <div className="recipe-page-container">
            <div className="recipe-grid">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="recipe-image"
                        />
                        <p className="recipe-name">{recipe.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipe;
