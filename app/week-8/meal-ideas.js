'use client';
import { useState, useEffect } from "react";


//API Fetching Function called fetchMealIdeas
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();

    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

//Meal Idea component 
export default function MealIdeas({ ingredient }) {

  //State variable using useState hook: meals
  const [meals, setMeals] = useState([]);

  //Load function that fetches meal ideas and updates the state
async function loadMealIdeas() {
  const mealIdeas = await fetchMealIdeas(ingredient);
  setMeals(mealIdeas);
}

//use Effect Hook 
useEffect(() => {
  if (ingredient) {
    loadMealIdeas();
  }
}, [ingredient]); //call loadMealIdeas whenever ingredient prop changes
  
return (
    <div>
      <h2>Meal Ideas</h2>
    {/*List of meals */}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </li>
        ))}
      </ul>
    </div>
  );
}



