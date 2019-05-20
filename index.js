const express = require("express");
const app = express();
app.use(express.static("./"));
const server = app.listen(3000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});
