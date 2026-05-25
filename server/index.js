import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/connectDB.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("hello server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
  connectDB();
});
