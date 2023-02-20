function materielModel(sequelize, DataTypes) {
  return sequelize.define("materiel", {
    miseEnService: {
      type: DataTypes.DATE,
      allowNull: true, // à confirmer
    },
    ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}

module.exports = materielModel;
