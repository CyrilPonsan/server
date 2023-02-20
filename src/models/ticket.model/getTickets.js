const {
  Ticket,
  Materiel,
  Client,
  Intervention,
  Statut,
  sequelize,
  RaisonSociale,
  TypeMateriel,
  Marque,
  Modele,
} = require("../../services/sequelize");

async function getTickets(offset, limit) {
  return await Ticket.findAll({
    include: [
      {
        model: Intervention,
        as: "intervention",
        include: [
          {
            model: Statut,
            as: "statut",
          },
        ],
      },
      {
        model: Materiel,
        as: "materiel",
        include: [
          {
            model: Client,
            as: "client",
            include: [
              {
                model: RaisonSociale,
                as: "raisonSociale",
                attributes: ["raisonSociale"],
              },
            ],
            attributes: ["nom"],
          },
          {
            model: TypeMateriel,
            as: "typeMateriel",
          },
          {
            model: Marque,
            as: "marque",
          },
          {
            model: Modele,
            as: "modele",
          },
        ],
        attributes: ["id"],
      },
    ],
    attributes: [
      "id",
      "ref",
      "titre",
      "resume",
      [sequelize.fn("MAX", sequelize.col("code")), "code"],
      [sequelize.fn("MAX", sequelize.col("date")), "date"],
    ],
    group: ["intervention.ticketId"],
    order: [["date", "DESC"]],
    offset: offset,
    limit: limit,
    subQuery: false,
  });
}

async function getTotalTickets() {
  return await Ticket.count();
}

module.exports = { getTickets, getTotalTickets };
