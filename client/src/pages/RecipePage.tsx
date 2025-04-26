import { useEffect, useMemo, useState } from "react";
import type Recipe from "../types/Recipe";
import axios, { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router";
import { Button, Divider, Spin } from "antd";
import { useNotFoundTimeout } from "../hooks";
import { MenuFoldOutlined, RollbackOutlined } from "@ant-design/icons";
import { RecipeInfo, Sidebar } from "../components";

const BASE_URL = import.meta.env.VITE_BASE_URL || "";

const RecipePage: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [recipesOfCategory, setRecipesOfCategory] = useState<Recipe[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(window.innerWidth > 768);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}/recipes/${id}`);

        setRecipe(response.data.recipe);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (recipe) {
      (async () => {
        try {
          const response: AxiosResponse = await axios.get(
            `${BASE_URL}/recipes?category=${recipe?.strCategory.toLowerCase()}`,
          );

          setRecipesOfCategory(response.data.recipes);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [recipe]);

  const ingredients = useMemo(() => {
    if (!recipe) return [];
    return Array.from({ length: 20 }, (_, i) => {
      const key = `strIngredient${i + 1}` as const;
      return recipe[key];
    }).filter(ingr => Boolean(ingr) && ingr.trim() !== "");
  }, [recipe]);

  const notFound = useNotFoundTimeout([recipe], isLoading);

  if (notFound) {
    return <p className="text-center text-4xl">Recipe not found</p>;
  }

  return (
    <>
      <Button
        size="middle"
        style={{ position: "absolute", right: 16, top: 16 }}
        onClick={() => setSidebarOpen(true)}
      >
        <MenuFoldOutlined />
      </Button>
      <div className="container mx-auto py-20 px-4">
        <Button onClick={() => navigate(-1)}>
          <RollbackOutlined />
        </Button>
        <Divider />
        {!isLoading ? (
          <RecipeInfo recipe={recipe} ingredients={ingredients} />
        ) : (
          <Spin size="large" fullscreen />
        )}
      </div>
      <Sidebar
        isLoading={isLoading}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        recipe={recipe}
        recipesOfCategory={recipesOfCategory}
      />
    </>
  );
};

export default RecipePage;
