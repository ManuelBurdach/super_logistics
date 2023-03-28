import express from "express";
import { body, validationResult } from "express-validator";
import cors from "cors";
import { load, save } from "./util/fileStorage.js";

//Serverport
const PORT = 7777;
//Expressapp
const app = express();

//Middleware cors Zugriffsrecht
app.use(cors());

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
app.post(
  "/api/v1/lkw",
  body("hersteller")
    .isLength({ min: 1, max: 10 })
    .withMessage("Hersteller muss min. einen und max. 10 Buchstaben enthalten!")
    .bail()
    .isNumeric()
    .withMessage("Es sind nur Buchstaben erlaubt!")
    .bail(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(200).json([{ error: errors.array() }]);
    }

    const lkw = req.body;
    save(lkw)
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  }
);

//Server auf PORT lauschen lassen
app.listen(PORT, () => {
  console.log("Server starts on port: ", PORT);
});
