function marqueModel(sequelize, DataTypes) {
  return sequelize.define(
    "marque",
    {
      marque: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
}

module.exports = marqueModel;
