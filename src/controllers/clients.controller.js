const deleteClient = require("../models/client.model/deleteClient");
const {
  getAllClients,
  getTotalClients,
} = require("../models/client.model/getAllClients");
const {
  getClientByContrat,
  getClientByNom,
} = require("../models/client.model/getClientDetails");
const getClientTickets = require("../models/client.model/getClientTickets");
const updateClient = require("../models/client.model/updateClient");
const { checkUpdateClient } = require("../services/checkData");
const { getPagination } = require("../services/queryService");
const {
  regexGeneric,
  regexNumber,
  badQuery,
  serverIssue,
  noData,
} = require("../utils/data");

async function httpGetAllClients(req, res) {
  const { page, lmt } = req.query;
  if (!page || !regexNumber.test(page) || !lmt || !regexNumber.test(lmt)) {
    return res.status(400).json({ message: badQuery });
  }
  try {
    console.log(req.query);
    const clients = await getAllClients(getPagination(+page, +lmt), +lmt);
    const total = await getTotalClients();
    if (!clients) {
      return res.status(404).json({ message: "La liste de clients est vide." });
    }
    return res.status(200).json({ data: clients, total: total });
  } catch (err) {
    return res.status(500).json({ message: serverIssue + err });
  }
}

async function httpSearchClient(req, res) {
  const type = req.query.type;
  const value = req.query.value;
  if (
    !type ||
    !regexGeneric.test(type) ||
    !value ||
    !regexGeneric.test(value)
  ) {
    return res.status(400).json({ message: badQuery });
  }
  try {
    let clients;
    switch (type) {
      case "contrat":
        clients = await getClientByContrat(+value);
        break;
      case "nom":
        clients = await getClientByNom(value);
        break;
      default:
        return res.status(400).json({ message: badQuery });
        break;
    }
    if (!clients) {
      return res.status(404).json({ message: noData });
    }
    return res.status(200).json(clients);
  } catch (err) {
    return res.status(500).json({ message: serverIssue + err });
  }
}

async function httpGetClientTickets(req, res) {
  const clientId = req.params.id;
  if (!clientId || !regexNumber.test(clientId)) {
    return res.status(400).json({ message: badQuery });
  }
  try {
    const tickets = await getClientTickets(clientId);
    if (!tickets) {
      return res.status(404).json({ message: noData });
    }
    return res.status(200).json(tickets);
  } catch (err) {
    return res.status(500).json({ message: serverIssue + err });
  }
}

async function httpDeleteClient(req, res) {
  const clientId = req.params.id;
  if (!clientId || !regexNumber.test(clientId)) {
    return res.status(400).json({ message: badQuery });
  }
  try {
    await deleteClient(clientId);
    return res.status(200).json({
      message: `Le client avec l'identifiant: ${clientId} a été supprimé de la bddd.`,
    });
  } catch (err) {
    return res.status(500).json({ message: serverIssue + err });
  }
}

async function httpUpdateClient(req, res) {
  const clientId = req.params.id;
  const clientToUpdate = req.body;
  if (
    checkUpdateClient(clientToUpdate) ||
    !clientId ||
    !regexNumber.test(clientId)
  ) {
    return res.status(400).json({ message: badQuery });
  }
  try {
    const updatedClient = await updateClient(clientId, clientToUpdate);
    if (updatedClient) {
      return res.status(201).json({
        message: `Le client avec l'identifiant: ${clientId} a été mis à jour avec succès.`,
      });
    }
  } catch (err) {
    return res.status(500).json({ message: serverIssue + err });
  }
}

module.exports = {
  httpSearchClient,
  httpGetAllClients,
  httpGetClientTickets,
  httpDeleteClient,
  httpUpdateClient,
};
