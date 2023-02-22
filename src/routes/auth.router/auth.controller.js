const jwt = require("jsonwebtoken");

const {
  login,
  getConseillerById,
} = require("../../models/auth.model/login.model");
const {
  regexMail,
  regexPassword,
  credentialsError,
  serverIssue,
  noAccess,
} = require("../../utils/data");

const accessTimeLife = "15m";
const refreshTimeLife = "1h";

//  authentification de l'utilisateur
async function httpLogin(req, res) {
  const { username, password } = req.body;
  if (
    !username ||
    !password ||
    !regexMail.test(username) ||
    !regexPassword.test(password)
  ) {
    return res.status(400).json({ credentialsError });
  }
  const user = await login(username, password);
  try {
    if (!user.isValid) {
      return res.status(400).json({ credentialsError });
    }
    if (user.roles.includes("tech") || user.roles.includes("admin")) {
      return res.status(200).json({
        user,
        accessToken: _getToken(user, accessTimeLife),
        refreshToken: _getToken(user, refreshTimeLife),
      });
    } else {
      return res.status(403).json({ noAccess });
    }
  } catch (error) {
    return res.status(500).json({ error: serverIssue + error });
  }
}

//  retourne des tokens tout neufs
function httpGenerateNewTokens(req, res) {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(403).json({ noAccess });
  }
  try {
    const decodedToken = jwt.verify(refreshToken, process.env.PRIVATE_KEY);
    if (user.roles.includes("tech") || user.roles.includes("admin")) {
      const user = {
        id: decodedToken.id,
        roles: decodedToken.roles,
      };
      return res.status(200).json({
        accessToken: _getToken(user, accessTimeLife),
        refreshToken: _getToken(user, refreshTimeLife),
      });
    } else {
      return res.status(403).json({ message: noAccess });
    }
  } catch (err) {
    res.status(403).json({ message: serverIssue + err });
  }
}

async function httpHandShake(req, res) {
  try {
    const user = await getConseillerById(req.auth.userId);
    if (user.roles.includes("tech") || user.roles.includes("admin")) {
      return res.status(200).json({
        user: {
          username: user.username,
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          roles: user.roles,
          createdAt: user.createdAt,
        },
      });
    }
    return res.status(403).json({ message: noAccess });
  } catch (error) {
    return res.status(500).json({ error: serverIssue + error });
  }
}

//  génère un token d'accès ou de refresh
const _getToken = (user, timeLife) => {
  return jwt.sign(
    {
      id: user.id,
      roles: user.roles,
    },
    process.env.PRIVATE_KEY,
    { expiresIn: timeLife }
  );
};

module.exports = { httpLogin, httpGenerateNewTokens, httpHandShake };
