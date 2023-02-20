const {
  Ticket,
  Materiel,
  Client,
  Intervention,
  Statut,
  Conseiller,
  RaisonSociale,
  TypeMateriel,
  Modele,
  Marque,
} = require("../../services/sequelize");

async function getTicketDetails(ticketRef) {
  return await Ticket.findOne({
    where: { ref: ticketRef },
    include: [
      {
        model: Intervention,
        as: "intervention",
        attributes: [
          "id",
          "lieuIntervention",
          "date",
          "description",
          "reponse",
          "titre",
        ],
        include: [
          {
            model: Statut,
            as: "statut",
            attributes: ["id", "code", "label"],
          },
          {
            model: Conseiller,
            as: "conseiller",
            attributes: ["id", "nom", "prenom"],
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
            attributes: [
              "id",
              "nom",
              "contrat",
              "adresse",
              "codePostal",
              "ville",
              "telephone",
            ],
          },
          {
            model: TypeMateriel,
            as: "typeMateriel",
            attributes: ["type"],
          },
          {
            model: Marque,
            as: "marque",
            attributes: ["marque"],
          },
          {
            model: Modele,
            as: "modele",
            attributes: ["modele", "url"],
          },
        ],
        attributes: ["id", "createdAt", "updatedAt", "miseEnService"],
      },
    ],
    order: [["intervention", "date", "DESC"]],
  });
}

module.exports = { getTicketDetails };
