// midd. per gestire le richieste prima che queste arrivino al controller
module.exports = function (req, res, next) {
  // console.log(`${req.method} ${req.url}`);
  next();
};
