const express = require("express");
/**
 * @param {express.Request} Req
 * @param {express.Response} Res
 */
const dotenv = require("dotenv");
dotenv.config();

// Import
const homeController = require("./controllers/homeController");
const postsRouter = require("./routers/posts");

const app = express();

// Confugurazione file statici
app.use(express.static("public"));

// Rotte
app.get("/", homeController.index);

// rotte dedicate ai post
app.use("/posts", postsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server is running on port: http://localhost:" + process.env.PORT
  );
});
