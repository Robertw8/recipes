import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";

const BASE_URL = process.env.API_BASE_URL || "";

const getRecipes = async (req: Request, res: Response) => {
  try {
    const { ingredient, country, category, name } = req.query;

    let url = "";

    if (ingredient) {
      url = `${BASE_URL}/filter.php?i=${encodeURIComponent(String(ingredient))}`;
    } else if (country) {
      url = `${BASE_URL}/filter.php?a=${encodeURIComponent(String(country))}`;
    } else if (category) {
      url = `${BASE_URL}/filter.php?c=${encodeURIComponent(String(category))}`;
    } else {
      url = `${BASE_URL}/search.php?s=${name || ""}`;
    }

    const apiResponse: AxiosResponse = await axios.get(url);

    res.json({ recipes: apiResponse.data.meals });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get recipes" });
  }
};

export default getRecipes;
