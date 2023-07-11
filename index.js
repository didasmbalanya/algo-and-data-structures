//file: index.js
const express = require("express");
const app = express();
const port = 3000;
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  //run the server
  console.log(`Example app listening on port ${port}`);
});
