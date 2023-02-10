/* eslint-disable quotes */
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
// const { fileURLToPath } = require('url');

const app = express();
const port = 3333;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use(express.static("assets"));


if (process.env.NODE_ENV === "production") {
  app.use('/', express.static(path.resolve(__dirname, '../build')));
};

// serve index.html
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
