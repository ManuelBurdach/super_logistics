import express from "express";
import { body } from "express-validator";
import cors from "cors";
import { load, save } from "./util/fileStorage.js";

//Serverport
const PORT = 7777;
//Expressapp
const app = express();

//Middleware cors Zugriffsrecht
// app.use(cors({ origin: "localhost:5173" }));

//PARSER für den body
app.use(express.json());

//GET
app.get("/api/v1/lkw", (req, res) => {
  load()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

//POST
app.post("/api/v1/lkw", (req, res) => {
  const lkw = req.body;
  save(lkw)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

//Server auf PORT lauschen lassen
app.listen(PORT, () => {
  console.log("Server starts on port: ", PORT);
});
