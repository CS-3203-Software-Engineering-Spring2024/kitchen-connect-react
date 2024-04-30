import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Recipe {
    ID: string;
    name: string;
    author: string;


}

const Instructions: React.FC = () => {

    const { recipeID } = useParams();

    //USE RECIPE ID TO GET RECIPE FROM DATABASE
    const [recipe, setRecipe] = useState<Recipe>({
        ID: '1',
        name: 'Chicken and Rice',
        author: 'John Doe'
    });

    return (

        <div className="instructions-page-container">

            <div className="title-container">
                <h2 className="recipe-name">Recipe: {recipe.name}</h2>
            </div>

            <div className="recipe-info-container">

            </div>
            
        </div>

    );

};

export default Instructions;