// module for generate the tokens
const jwt = require("jsonwebtoken");

// generate the token

exports.generateAccessToken = (user) => {
  //token valide 1 semaine
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "604800s" });
  };

exports.authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader;

  if (token == null) return response.json("Error: not connected");

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {

    if (err) return response.json("Error: not connected");

    console.log("c'est l'id du token:", user.id);
    request.user = user.id;

    next();
  });
};

// middleware pour controler l'id du user, sans bloquer 
exports.controlIfToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader;

  if (token == null) return next();

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {

    if (err) return next();

    request.user = user.id;

    next();
  });
};