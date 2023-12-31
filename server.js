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
const errorsFormatterMiddlware = require("./middlewares/errorsFormatter");
const routesLoggerMiddlwere = require("./middlewares/routesLogger");
const routeNotFoundMiddlware = require("./middlewares/routeNotFound");

const authRouter = require("./routers/auth");

const app = express();
app.use(express.json());

// Confugurazione file statici
app.use(express.static("public"));
// Configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configuro il midd. a livello globale
app.use(routesLoggerMiddlwere);

// Rotte
app.get("/", homeController.index);

// rotte dedicate ai post
app.use("/posts", postsRouter);

// rotta auth
app.use("/login", authRouter);

// Gestione degli errori
app.use(errorsFormatterMiddlware);

// Midd. per gestire il 404 (non bisogna registrarlo prima delle rotte o verranno bloccate)
app.use(routeNotFoundMiddlware);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server is running on port: http://localhost:" + process.env.PORT
  );
});
