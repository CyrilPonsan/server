function statutModel(sequelize, DataTypes) {
  return sequelize.define(
    "statut",
    {
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
}

module.exports = statutModel;
