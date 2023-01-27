import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js"
import contentRoutes from "./routes/content.routes.js"
import infoRoutes from "./routes/info.routes.js"

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

// database connection setup
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  const db = mongoose.connection;
  db.on("open", () => {
    console.log("Mongodb database is conneted");
  });

  db.on("error", (error) => {
    console.log(error);
  });

  //Logger
  app.use(morgan("tiny"));
}

// apply middlewares
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// apply routes
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server are listing....",
  });
});

app.use("/api", userRoutes)
app.use("/api", contentRoutes)
app.use("/api", infoRoutes)

app.use("*", (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, console.log(`Server running on port ${PORT}...`));
