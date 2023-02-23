const { regexMail, regexGeneric, regexNumber } = require("../utils/data");

function checkClient(data) {
  const { nom, email, contrat, telephone, adresse, codePostal, ville } = data;
  return (
    !nom ||
    !regexGeneric.test(nom) ||
    !email ||
    !regexMail.test(email) ||
    !contrat ||
    !regexGeneric.test(contrat) ||
    !telephone ||
    !regexGeneric.test(telephone) ||
    !adresse ||
    !regexGeneric.test(adresse) ||
    !codePostal ||
    !regexGeneric.test(codePostal) ||
    !ville ||
    !regexGeneric.test(ville)
  );
}

function checkMateriel(data) {
  const { miseEnService, ref, clientId, typeMaterielId, marqueId, modeleId } =
    data;

  return (
    !miseEnService ||
    !regexGeneric.test(miseEnService) ||
    (ref && !regexNumber.test(ref)) ||
    !typeMaterielId ||
    !regexNumber.test(typeMaterielId) ||
    !marqueId ||
    !regexNumber.test(marqueId) ||
    !modeleId ||
    !regexNumber.test(modeleId)
  );
}

module.exports = { checkClient, checkMateriel };
