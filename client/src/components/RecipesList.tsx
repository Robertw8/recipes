import { NavLink } from "react-router";
import type Recipe from "../types/Recipe";
import { Spin } from "antd";

interface RecipesListProps {
  isLoading: boolean;
  recipes: Recipe[];
}

const RecipesList: React.FC<RecipesListProps> = ({ isLoading, recipes }) => {
  return (
    <ul className="grid grid-cols-1 min-sm:grid-cols-2 min-lg:grid-cols-3 gap-4 mt-12">
      {!isLoading ? (
        recipes?.map((recipe: Recipe) => (
          <li key={recipe?.idMeal} className="border border-[#4DA1A9] rounded-2xl">
            <NavLink to={`/recipe/${recipe?.idMeal}`} className="hover:text-[#2E5077] duration-150">
              <img
                src={recipe?.strMealThumb}
                alt={recipe?.strMeal}
                width={300}
                height={300}
                loading="lazy"
                className="rounded-t-2xl mx-auto w-full"
              />
              <div className="p-3">
                <h3 className="font-bold text-3xl">{recipe?.strMeal}</h3>
                <p className="mt-2">Category: {recipe?.strCategory}</p>
                <p className="mt-2">Country: {recipe?.strArea}</p>
              </div>
            </NavLink>
          </li>
        ))
      ) : (
        <Spin size="large" fullscreen />
      )}
    </ul>
  );
};

export default RecipesList;
