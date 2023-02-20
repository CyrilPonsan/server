const { Ticket, Intervention, Materiel } = require("../../services/sequelize");
const { _setRandomNumber } = require("../data");

require("dotenv").config;

let date = new Date("2021, 01, 01");
let day = 0;

async function createTickets() {
  const materiels = await Materiel.findAll();
  let ref = 5000;
  const tickets = [];
  for (let i = 1; i <= 25; i++) {
    const materielId = _setRandomNumber(1, 1500);
    tickets.push({
      ref: ref,
      materielId: materielId,
      titre: "en panne",
      resume: "lorem lorem",
      clientId: materiels.find((m) => m.id === materielId).clientId,
    });
    ref++;
  }
  const newTickets = await Ticket.bulkCreate(tickets);
  const interventions = [];
  for (let i = 1; i <= 25; i++) {
    interventions.push({
      date: _addDays(date, day++),
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque facere? Ab necessitatibus ducimus vel quod eaque quis excepturi natus reiciendis id nam ea nobis nostrum magni voluptatum, iste alias ratione accusantium delectus.",
      reponse:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque facere? Ab necessitatibus ducimus vel quod eaque quis excepturi natus reiciendis id nam ea nobis nostrum magni voluptatum, iste alias ratione accusantium delectus.",

      ticketId: i,
      statutId: 1,
      conseillerId: 1,
      titre: "depannage 1",
      lieuIntervention: "distance",
    });
    interventions.push({
      date: _addDays(date, day++),
      ticketId: i,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque facere? Ab necessitatibus ducimus vel quod eaque quis excepturi natus reiciendis id nam ea nobis nostrum magni voluptatum, iste alias ratione accusantium delectus.",
      reponse:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque facere? Ab necessitatibus ducimus vel quod eaque quis excepturi natus reiciendis id nam ea nobis nostrum magni voluptatum, iste alias ratione accusantium delectus.",

      statutId: 2,
      conseillerId: 1,
      titre: "depannage 2",
      lieuIntervention: "distance",
    });
    interventions.push({
      date: _addDays(date, day++),
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque facere? Ab necessitatibus ducimus vel quod eaque quis excepturi natus reiciendis id nam ea nobis nostrum magni voluptatum, iste alias ratione accusantium delectus.",
      reponse:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque facere? Ab necessitatibus ducimus vel quod eaque quis excepturi natus reiciendis id nam ea nobis nostrum magni voluptatum, iste alias ratione accusantium delectus.",

      ticketId: i,
      statutId: 4,
      conseillerId: 1,
      titre: "depannage 3",
      lieuIntervention: "distance",
    });
    interventions.push({
      date: _addDays(date, day++),
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque facere? Ab necessitatibus ducimus vel quod eaque quis excepturi natus reiciendis id nam ea nobis nostrum magni voluptatum, iste alias ratione accusantium delectus.",
      reponse:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque facere? Ab necessitatibus ducimus vel quod eaque quis excepturi natus reiciendis id nam ea nobis nostrum magni voluptatum, iste alias ratione accusantium delectus.",

      ticketId: i,
      statutId: 5,
      conseillerId: 2,
      lieuIntervention: "distance",
      titre: "depannage 4",
    });
  }
  const newInterventions = await Intervention.bulkCreate(interventions);
}

const _addDays = (date, days) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

module.exports = { createTickets };
