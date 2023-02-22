function clientModel(sequelize, DataTypes) {
  return sequelize.define(
    "client",
    {
      nom: {
        type: DataTypes.STRING,
        allownull: false,
      },
      email: {
        type: DataTypes.STRING,
        allownull: false,
      },
      contrat: {
        type: DataTypes.INTEGER,
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
    },
    {
      hooks: {
        beforeCreate: function (user) {
          user.fonction = user.fonction.toLowerCase();
        },
      },
    }
  );
}

module.exports = clientModel;
