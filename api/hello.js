// api/hello.js
import express from "express";
const app = express();

module.exports = async (req, res) => {
  res.status(200).json({ message: "Hello from the backend!" });
};
