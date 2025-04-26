import axios from "axios";
import { Button, Dropdown, Input } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { DownOutlined } from "@ant-design/icons";
import { useDebounce, useNotFoundTimeout } from "../hooks";
import type Recipe from "../types/Recipe";
import { RecipesList } from "../components";

const BASE_URL = import.meta.env.VITE_BASE_URL || "";

type filter = "ingredient" | "country" | "category";

const RecipesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramFilter =
    (["ingredient", "country", "category"] as filter[]).find(f => searchParams.has(f)) ?? "";
  const paramValue = paramFilter ? searchParams.get(paramFilter)! : "";

  const [currentFilter, setCurrentFilter] = useState<filter | "">(paramFilter);
  const [filterValue, setFilterValue] = useState<string>(paramValue);

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedFilter = useDebounce(filterValue, 1000);

  useEffect(() => {
    if (!currentFilter || !filterValue) {
      setSearchParams({});
    } else {
      setSearchParams({ [currentFilter]: filterValue });
    }
  }, [currentFilter, filterValue]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const qp =
          currentFilter && debouncedFilter
            ? `?${currentFilter}=${encodeURIComponent(debouncedFilter)}`
            : "";
        const { data } = await axios.get<{ recipes: Recipe[] }>(`${BASE_URL}/recipes${qp}`);
        setRecipes(data.recipes || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [currentFilter, debouncedFilter]);

  const items = (["ingredient", "country", "category"] as filter[]).map((f, i) => ({
    key: String(i),
    label: f.charAt(0).toUpperCase() + f.slice(1),
    onClick: () => {
      setCurrentFilter(f);
      setFilterValue("");
      setRecipes([]);
    },
  }));

  const notFound = useNotFoundTimeout(recipes, isLoading);

  return (
    <div className="container py-12 px-4 mx-auto">
      <h1 className="text-4xl min-md:text-5xl text-center">
        Recipes {currentFilter && `by ${currentFilter}`}
      </h1>
      <div className="flex justify-center mt-6 gap-4">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button className="capitalize w-[200px]" size="large" onClick={e => e.preventDefault()}>
            {currentFilter || "Filter"}
            <DownOutlined />
          </Button>
        </Dropdown>
        <Input
          value={filterValue}
          size="large"
          className="max-w-max"
          placeholder="Enter your filter"
          onChange={({ target }) => setFilterValue((target as HTMLInputElement).value)}
          disabled={!currentFilter}
        />
      </div>
      {!notFound ? <RecipesList recipes={recipes} isLoading={isLoading} /> : <p>Nothing found</p>}
    </div>
  );
};

export default RecipesPage;
