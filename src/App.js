

import React, { useState } from 'react';
// import './App.css';
import bgImage from './images/bgimage.jpeg';
import logo from './images/logo.jpeg'

const recipesData = [
  {
    id: 1,
    title: 'Loaded fries',
    author: 'John Doe',
     images:['/assets/id1.jpeg',
      '/assets/id2.jpeg',
      '/assets/id3.jpeg'
    ] ,
    ingredients: ['French Fries', 'Cheese', 'Bacon', 'Other Toppings', 'Black pepper'],
    instructions:[ 'Chop lettuce. Mix with croutons, cheese, and dressing. Serve chilled.',
      'Broil Cheese & Bacon: Sprinkle shredded cheese and cooked bacon over the crispy fries and broil under high heat until melted and bubbly.',
      'Add Fresh Toppings: Add any fresh toppings (like diced tomatoes or sliced green onions) and a drizzle of sour cream or dipping sauce.'
    ]
  },
  {
    id: 2,
    title: 'Chicken tikka',
    author: 'adam devid',
    images:['/assets/tikka1.jpeg',
      '/assets/tikka2.jpeg',
      '/assets/tikka3.jpeg'
    ] ,
    ingredients: ['Chicken (92%)', 'Pea Fibre,', 'Spices', 'otato Starch','Preservative (Sodium Lactate)','Pea Starch',
      'Potassium Salt',
     ' Garlic Powder',],
    instructions:['In a large bowl, combine the yogurt, lemon juice, vegetable oil, ginger-garlic paste, turmeric powder, red chili powder, garam masala, cumin powder, paprika, and salt.',
     ' Mix well to form a smooth marinade.',
    ' Add the chicken chunks to the marinade, ensuring they are well coated.',
    'Cover the bowl with plastic wrap or a lid and refrigerate fThread the marinated chicken onto skewers (if using metal skewers, there is no need to soak; if using wooden skewers, soak them in water for 30 minutes to prevent burning). Place the skewers on the grill and cook for about 10-15 minutes, turning occasionally, until the chicken is cooked through and has a nice char.or at least 2 hours, or ideally overnight for the best flavor.',
    'If grilling, preheat your grill to medium-high heat.',
    
    ]
  },
  {
    id: 3,
    title: 'Chocolate Cake',
    author: 'Emily Brown',
    images:['/assets/cake.jpeg',
      '/assets/cake1.jpeg',
      '/assets/cake2.jpeg'
    ] ,
    ingredients: ['Flour', 'Sugar', 'Cocoa powder', 'Eggs', 'Butter', 'Vanilla extract'],
    instructions: 'Mix dry ingredients. Beat eggs and butter. Combine all ingredients. Bake at 350°F.',
  },
];

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="app-header">
      <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Simply Recipes</h1>
       
      </header>
      <div className="content">
        <div className="recipe-list">
          <h2>Recipes</h2>
          <ul>
            {recipesData.map((recipe) => (
              <li key={recipe.id} onClick={() => handleRecipeSelect(recipe)}>
                {recipe.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe-details">
          <h2>Recipe Details</h2>
          {selectedRecipe ? (
            <div>
              <h3>{selectedRecipe.title} (Author: <span className="author-name">{selectedRecipe.author}</span>)</h3>
              <div className="images-container">
                {selectedRecipe.images && selectedRecipe.images.map((image, index) => (
                  <img key={index} src={image} alt={`${selectedRecipe.title} Image ${index + 1}`} />
                ))}
              </div>
              <h4>Ingredients:</h4>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4 className="recipe-details1">Instructions:</h4>
              <p>{selectedRecipe.instructions}</p>
            </div>
          ) : (
            <p>Select a recipe to see details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;