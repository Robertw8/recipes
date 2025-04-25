import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";

const BASE_URL = process.env.API_BASE_URL || "";

const getRecipeInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const url = `${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`;

    const apiResponse: AxiosResponse = await axios.get(url);

    const recipe = apiResponse.data.meals?.[0];
    res.json({ recipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get recipe info" });
  }
};

export default getRecipeInfo;
