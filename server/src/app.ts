import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { LinksRouter } from "./Routers/LinksRouter";

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(LinksRouter);

export { app };
