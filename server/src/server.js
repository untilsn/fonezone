import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import mainRouter from "./routes/mainRouter.js";
import config from "./config/env.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: config.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

mainRouter(app);

app.use(errorMiddleware);

const port = config.PORT || 5000;

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
