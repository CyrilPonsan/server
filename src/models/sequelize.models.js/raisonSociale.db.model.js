function raisonSocialeModel(sequelize, DataTypes) {
  return sequelize.define(
    "raisonSociale",
    {
      raisonSociale: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
}

module.exports = raisonSocialeModel;
