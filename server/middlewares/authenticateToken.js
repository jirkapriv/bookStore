const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send({ msg: "Invalid token" });
    req.user = user;
    next();
  });

  if (!token) return res.status(401).send({ msg: "Token missing" });
}

module.exports = authenticateToken;
