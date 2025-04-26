import type Recipe from "../types/Recipe";
import { Divider } from "antd";
import { NavLink } from "react-router";

interface RecipeInfoProps {
  recipe: Recipe | null;
  ingredients: string[];
}

const RecipeInfo: React.FC<RecipeInfoProps> = ({ recipe, ingredients }) => {
  return (
    <article>
      <img
        src={recipe?.strMealThumb}
        alt={recipe?.strMeal}
        width={400}
        height={400}
        className="rounded-2xl mx-auto"
      />
      <Divider />
      <h3 className="text-4xl font-bold text-[#2E5077] text-center">{recipe?.strMeal}</h3>
      <NavLink
        className="text-[#2E5077] hover:text-[#4DA1A9] duration-150 block mt-4 underline text-center"
        to={`/?country=${recipe?.strArea.toLowerCase()}`}
      >
        Country: {recipe?.strArea}
      </NavLink>
      <p className="text-[#2E5077] mt-4 max-w-[400px] min-md:max-w-[600px] min-lg:max-w-[800px] mx-auto">
        <span className="font-semibold">Instruction: </span>
        {recipe?.strInstructions}
      </p>
      <ul className="flex flex-wrap gap-4 mt-4 justify-center">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <NavLink
              className="text-[#2E5077] hover:text-[#4DA1A9] duration-150 underline"
              to={`/?ingredient=${ingredient.toLowerCase().replace(" ", "_")}`}
            >
              {ingredient}
            </NavLink>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default RecipeInfo;
