const { Conseiller } = require("../../services/sequelize");

async function getConseillerById(userId) {
  const user = await Conseiller.findByPk(userId);
  if (user) {
    return user;
  }
  return false;
}

module.exports = getConseillerById;
