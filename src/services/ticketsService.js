const { regexGeneric, regexNumber } = require("../utils/data");

function testNewInterventionData(data) {
  return (
    !data.lieuIntervention ||
    !regexGeneric.test(data.lieuIntervention) ||
    !data.description ||
    !regexGeneric.test(data.reponse) ||
    !data.reponse ||
    !regexGeneric.test(data.reponse) ||
    !data.titre ||
    !regexGeneric.test(data.titre) ||
    !data.statut ||
    !regexGeneric.test(data.statut) ||
    !data.ticket_id ||
    !regexNumber.test(data.ticket_id)
  );
}

function testNewTicketData(data) {
  return (
    !data.ref ||
    !regexNumber.test(data.ref) ||
    !data.materiel_id ||
    !regexNumber.test(data.materiel_id) ||
    !data.titre ||
    !regexGeneric.test(data.titre) ||
    !data.resume ||
    !regexGeneric.test(data.resume)
  );
}

module.exports = { testNewInterventionData, testNewTicketData };
