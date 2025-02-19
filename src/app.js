import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import routes from "./routes.js";
import helmet from "helmet";

const app = express();

dotenv.config({});

app.use(
  cors({
    origin: "https://serene-beignet-c36117.netlify.app", // React frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // Allow sending cookies with requests
  })
);
app.use(helmet());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));

// all routes
app.use("/api/v1" , routes);

// custom error

export default app;
