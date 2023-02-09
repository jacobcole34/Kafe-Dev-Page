/* eslint-disable quotes */
import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3333;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//handle parsing request body
app.use(express.json());

//serve static files
app.use(express.static("assets"));

// serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
