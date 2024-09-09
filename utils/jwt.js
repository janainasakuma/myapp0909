const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, verifyToken };