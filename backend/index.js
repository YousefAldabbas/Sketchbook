import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import logger from "./src/utils/logger";
import connect from "./src/utils/connect";
// dont forget to delete it in produciton
import morgan from "morgan";

import routes from "./src/routes";
const whitelist = [
  "http://127.0.0.1:5173",
  "http://localhost:5173",
  "http://localhost:3500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origins: "http://localhost:5173",
    allowedHeaders: "*",
    allowCredentials: "true",
  })
);
// SAME
app.use(morgan("dev"));

app.listen(port, async () => {
  //  connect to db
  await connect();
  logger.info(`App is now running in post ${port}`);
  routes(app);
});
