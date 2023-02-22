function raisonSocialeModel(sequelize, DataTypes) {
  return sequelize.define(
    "raisonSociale",
    {
      raisonSociale: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
}

module.exports = raisonSocialeModel;
