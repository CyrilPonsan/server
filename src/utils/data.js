//  quelques constantes utilisées un peu partout dans l'api

exports.serverIssue = `Problème serveur, réessayez plus tard.`;
exports.credentialsError = "Identifiants incorrects.";
exports.noData = "Ressource inexistante.";
exports.badQuery = "Paramètres de requête non conformes.";
exports.noAccess = "Accès réservé.";
exports.regexMail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
exports.regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{8,})/;
exports.regexFacteurPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/;
exports.regexNumber = /^[0-9]*$/;
exports.regexGeneric = /^[a-zA-Z0-9\s,.':\-+éàèâôêûù]{0,}$/;

exports._setRandomNumber = (min, max) => {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};
