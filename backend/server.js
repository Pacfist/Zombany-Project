const express = require("express");
const app = express();

const HTTP_PORT = process.env.HTTP_PORT || 8010;

app.listen(HTTP_PORT, () => {
  console.log("Server running on http://localhost:" + HTTP_PORT);
});
