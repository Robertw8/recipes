import { Router } from "express";
import { getRecipeInfo, getRecipes } from "../controllers/recipes";

const router = Router();

router.get("/", getRecipes);

router.get("/:id", getRecipeInfo);

export default router;
