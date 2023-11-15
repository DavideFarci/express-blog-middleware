const generateJwt = require("../Utilities/jwtGenerate");

function login(req, res) {
  // leggo dati utente dalla richiesta (body)
  const { username, password } = req.body;

  if (!username || !password) {
    res.status("400").send("username e password sono obbligatori");
    return;
  }
  // leggo il db e controllo se c'è una corrispondenza tra username e pass
  const users = require("../db/users.json");

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    res.status("401").send("Username e Password errati");
    return;
  }

  // una volta trovato l'utente, genero il token e lo invio al client
  const token = generateJwt(user);

  res.json({
    token,
  });
}

module.exports = {
  login,
};
