const jwt = require("jsonwebtoken");
module.exports = function (user) {
  // estraggo i dati da salvare nel token (solo quelli che mi servono e non quelli sensibili)
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
