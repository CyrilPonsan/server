const {
  getAllClients,
  getTotalClients,
} = require("../../models/client.model/getAllClients");
const {
  getClientByContrat,
  getClientByNom,
} = require("../../models/client.model/getClientDetails");
const { getPagination } = require("../../services/queryService");
const {
  regexGeneric,
  regexNumber,
  badQuery,
  serverIssue,
  noData,
} = require("../../utils/data");

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
  console.log(type, value);
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

module.exports = { httpSearchClient, httpGetAllClients };
