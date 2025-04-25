import express from "express";
import { recipesRouter } from "./routes";

const app = express();

app.use(express.json());
app.use("/recipes", recipesRouter);

export default app;
