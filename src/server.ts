import { connect } from "./database/database";
const express = require("express");
const app = express();
const port = 5002;

connect();

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
