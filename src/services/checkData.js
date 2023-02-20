const { regexMail } = require("../utils/data")

function checkUpdateClient(data) {
    const {nom, email, contrat, telephone, adresse, codePostal, ville,} = data
    return (
        !email || regexMail.test(email) ||
    )
}