import { createBrowserRouter } from "react-router";
import { Recipes, Recipe } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Recipes,
  },
  { path: "/recipe", children: [{ path: ":id", Component: Recipe }] },
]);

export default router;
