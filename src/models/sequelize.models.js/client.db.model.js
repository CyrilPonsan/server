function clientModel(sequelize, DataTypes) {
  return sequelize.define("client", {
    nom: {
      type: DataTypes.STRING,
      allownull: false,
    },
    email: {
      type: DataTypes.STRING,
      allownull: false,
    },
    contrat: {
      type: DataTypes.STRING,
      allownull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allownull: false,
    },
    adresse: {
      type: DataTypes.STRING,
      allownull: false,
    },
    codePostal: {
      type: DataTypes.STRING,
      allownull: false,
    },
    ville: {
      type: DataTypes.STRING,
      allownull: false,
    },
  });
}

module.exports = clientModel;
