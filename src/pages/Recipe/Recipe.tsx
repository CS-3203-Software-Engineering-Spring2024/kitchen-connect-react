import React from 'react';
import { anhnguyen, burgerWithLettuce, whiteDimSum } from '../../assets';
import './recipe.css';

interface Recipe {
    name: string;
    image: string;
}

const recipes: Recipe[] = [
    // Add your recipes here
    { name: 'Tofu Bowl', image: anhnguyen },
    { name: 'Cheeseburger', image: burgerWithLettuce },
    { name: 'Dumpling', image: whiteDimSum },
];

const Recipe: React.FC = () => {
    return (
        <div>
            <h1>Saved Recipes</h1>
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
