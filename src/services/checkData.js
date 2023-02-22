const { regexMail, regexGeneric } = require("../utils/data");

function checkUpdateClient(data) {
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

function checkCreateClient(data) {
  const { nom, email, telephone, adresse, codePostal, ville } = data;
  return (
    !nom ||
    !regexGeneric.test(nom) ||
    !email ||
    !regexMail.test(email) ||
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

module.exports = { checkCreateClient, checkUpdateClient };
