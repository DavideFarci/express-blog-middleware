const express = require("express");
/**
 * @param {express.Request} Req
 * @param {express.Response} Res
 */
const dotenv = require("dotenv");
dotenv.config();

// Import
const homeController = require("./controllers/homeController");

const app = express();

app.use(express.static("public"));

// Rotte
app.use("/", homeController.index);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server is running on port: http://localhost:" + process.env.PORT
  );
});
