module.exports = function (req, res, next) {
  res.status("400").send("<h1>404 Not Found</h1>");
  res.format({
    json: () => {
      res.status("400").json({
        message: "Mi sa che ti sei perso...",
      });
    },
    default: () => {
      res.status("400").send("<h1>Mi sa che ti sei perso...</h1>");
    },
  });
};
