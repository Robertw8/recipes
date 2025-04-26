interface Recipe {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string;
}
export default Recipe;
