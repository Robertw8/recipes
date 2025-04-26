import express from "express";
import cors from "cors";
import { recipesRouter } from "./routes";

const app = express();

app.use(cors({ origin: ["http://localhost:3000", "http://localhost:3001"] }));
app.use(express.json());
app.use("/recipes", recipesRouter);

export default app;
