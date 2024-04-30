import React from 'react';
import './recipe.css';

interface RecipeProps {
    recipes: { image: File; name: string; tags: string[] }[];
}

const Recipe: React.FC<RecipeProps> = ({ recipes }) => {
    return (
        <div className="recipe-page-container">
            <div className="title-container">
                <h2 className="recipe-page-container-title">Recipes</h2>
            </div>
            <div className="recipe-grid">
                {recipes.map((recipe, index) => {
                    const imageUrl = URL.createObjectURL(recipe.image);
                    return (
                        <div key={index} className="recipe-card">
                            <div className="recipe-card-inner">
                                <img
                                    src={imageUrl}
                                    alt={recipe.name}
                                    className="recipe-image"
                                />
                                <h2 className="recipe-name">{recipe.name}</h2>
                                <p>{recipe.tags.join(', ')}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Recipe;
