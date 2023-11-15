const fs = require("fs");

// questo midd. si occupa di formattare in vari modi il messaggio di errore
/**
 * Questo midd. ha 4 argomenti quindi viene riconosciuto da express come midd. degli errori
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = function (err, req, res, next) {
  // Caso in cui nella richiesta ci sia un file, che devo eliminare per evitare che rimanga inutilizzato in memoria:
  if (req.file) {
    fs.unlinkSync(req.file.path);
  }

  res.format({
    json: () => {
      res.status("500").json({
        message: "Qualcosa è andato storto",
        error: err.message,
      });
    },
    default: () => {
      res.status("500").send("<h1>Qualcosa è andato storto</h1>");
    },
  });
};
