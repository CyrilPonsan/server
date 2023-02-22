const { regexMail, regexGeneric } = require("../utils/data");

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

module.exports = { checkClient };
