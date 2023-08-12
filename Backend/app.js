const express = require("express");
const app = express();

const port = 3000;

// Sending response
app.get("/", (req, res) => {
  res.send("Hello AestheticStore");
});

// Listening server
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
