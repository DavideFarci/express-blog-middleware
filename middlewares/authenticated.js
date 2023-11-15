const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const bearerToken = req.header("Authorization");
  //   console.log(bearerToken);

  if (!bearerToken) {
    res.status("401").send("Token mancante");
  }

  // Estraggo solo il token
  const token = bearerToken.split(" ")[1];

  console.log(token);

  const isValid = jwt.verify(token, process.env.JWT_SECRET);
  console.log(isValid);

  next();
};
