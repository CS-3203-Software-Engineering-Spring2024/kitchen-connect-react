import React from 'react';

interface RecipeProps {
    recipes: { image: File; name: string; tags: string[] }[];
}

const Recipe: React.FC<RecipeProps> = ({ recipes }) => {
    return (
        <div className="recipe-grid">
            {recipes.map((recipe, index) => {
                const imageUrl = URL.createObjectURL(recipe.image);
                return (
                    <div key={index} className="recipe-card">
                        <img src={imageUrl} alt={recipe.name} />
                        <h2>{recipe.name}</h2>
                        <p>{recipe.tags.join(', ')}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Recipe;
