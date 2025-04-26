import { Button, Divider, Drawer, Spin, type DrawerProps } from "antd";
import { NavLink } from "react-router";
import type Recipe from "../types/Recipe";

interface SidebarProps extends DrawerProps {
  recipe: Recipe | null;
  isLoading: boolean;
  recipesOfCategory: Recipe[];
}

const Sidebar: React.FC<SidebarProps> = ({
  onClose,
  open,
  recipe,
  isLoading,
  recipesOfCategory,
}) => {
  return (
    <Drawer onClose={onClose} open={open} mask={false}>
      <Button className="capitalize" size="large">
        <NavLink to={`/?category=${recipe?.strCategory.toLowerCase()}`}>
          More in "{recipe?.strCategory}"
        </NavLink>
      </Button>
      <Divider />
      <h4 className="text-xl mt-6">More receipts</h4>
      <ul className="mt-6">
        {!isLoading ? (
          recipesOfCategory?.map((rec: Recipe) => (
            <li
              key={rec?.idMeal}
              className="border border-[#4DA1A9] rounded-2xl not-first-of-type:mt-4"
            >
              <NavLink to={`/recipe/${rec?.idMeal}`} className="hover:text-[#2E5077] duration-150">
                <img
                  src={rec?.strMealThumb}
                  alt={rec?.strMeal}
                  width={150}
                  height={150}
                  loading="lazy"
                  className="rounded-t-2xl mx-auto w-full"
                />
                <div className="p-3">
                  <h3 className="font-bold text-xl">{rec?.strMeal}</h3>
                </div>
              </NavLink>
            </li>
          ))
        ) : (
          <Spin size="large" fullscreen />
        )}
      </ul>
    </Drawer>
  );
};

export default Sidebar;
