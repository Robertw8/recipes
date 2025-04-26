import "./css/index.css";
import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { router } from "./utils";
import { ConfigProvider } from "antd";
import { theme } from "./utils";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={theme}>
    <RouterProvider router={router} />
  </ConfigProvider>,
);
