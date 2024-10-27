const express = require("express");
const app = express();
const connectToMongoDB = require("./config/MongoDB");
const indexRouter = require("./routes/IndexRoutes");
require("dotenv").config();

app.use(express.json());

connectToMongoDB()
  .then(() => {
    app.get("/api/v1/hello", (req, res) => {
      res.send("hellow world kya a3rfsa");
    });
    app.use("/api/v1/", indexRouter);

    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to the server:", error);
  });
