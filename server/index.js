import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./Routers/routes.js";
import cors from "cors";
import morgan from "morgan";
dotenv.config();

//middle wars
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/info", route);

//mongoDB connection
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MongoDB);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

app.listen(3001, () => {
  connect();
  console.log("Server is Connected");
});
