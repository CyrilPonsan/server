function conseillerModel(sequelize, DataTypes) {
  return sequelize.define("conseiller", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "Cet email n'est pas disponible." },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roles: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },);
}

module.exports = conseillerModel;
