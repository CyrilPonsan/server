const bcrypt = require("bcrypt");

const { Conseiller } = require("../../services/sequelize");

async function login(username, password) {
  const user = await Conseiller.findOne({
    where: { username: username },
  });
  if (!user) {
    return false;
  }
  console.log(username, password);
  const isValid = await bcrypt.compare(password, user.password);
  return {
    isValid,
    username: user.username,
    id: user.id,
    nom: user.nom,
    prenom: user.prenom,
    roles: user.roles,
    createdAt: user.createdAt,
  };
}

async function getConseillerById(userId) {
  const user = await Conseiller.findByPk(userId);
  if (user) {
    return user;
  }
  return false;
}

module.exports = getConseillerById;

module.exports = { login, getConseillerById };
