function ticketModel(sequelize, DataTypes) {
  return sequelize.define(
    "ticket",
    {
      ref: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      titre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resume: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
}

module.exports = ticketModel;
