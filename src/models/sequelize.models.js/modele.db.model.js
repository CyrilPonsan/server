function modeleModel(sequelize, DataTypes) {
  return sequelize.define(
    "modele",
    {
      modele: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true, //  à confirmer
      },
    },
    { timestamps: false }
  );
}

module.exports = modeleModel;
