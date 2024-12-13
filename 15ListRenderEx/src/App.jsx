/*
extracting a list item component
*/

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
          <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map(item => <li key={item}>{item}</li>)}
            </ul>
          
          </div>
        )
      }
        
      )}
    </div>
  );
}



