function typeMaterielModel(sequelize, DataTypes) {
  return sequelize.define(
    "typeMateriel",
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
}

module.exports = typeMaterielModel;
