const jwt = require("jsonwebtoken");
const { noAccess } = require("../utils/data");
const privateKey = process.env.PRIVATE_KEY;

/**
 * vérifie que le token contenu dans les headers est valide
 * et que l'utilisateur a le rôle "client" qui lui permet d'accéder
 * aux endpoints de l'application client
 *
 * @param {*} req headers
 * @param {*} res
 * @param {*} next
 */
const hasAccess = (req, res, next) => {
  try {
    /* 
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, privateKey);
    console.log("coucou, je check le token: ", decodedToken);
    if (
      decodedToken.roles.includes("tech") ||
      decodedToken.roles.includes("admin")
    ) {
      req.auth = { userId: decodedToken.id, roles: decodedToken.roles };
      next();
    } else {
      return res.status(403).json({ message: noAccess });
    } */
    if (
      req.session &&
      (req.session.roles.includes("tech") ||
        req.session.roles.includes("admin"))
    ) {
      next();
    }
  } catch (error) {
    res.status(403).json({ noAccess });
  }
};

const isAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, privateKey);
    console.log("coucou, je check le token: ", decodedToken);
    if (decodedToken.roles.includes("admin")) {
      req.auth = { userId: decodedToken.id, roles: decodedToken.roles };
      next();
    } else {
      return res.status(403).json({ message: noAccess });
    }
  } catch (error) {
    res.status(403).json({ noAccess });
  }
};
module.exports = { hasAccess, isAdmin };
