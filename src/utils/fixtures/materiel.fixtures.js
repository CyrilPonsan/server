require("dotenv").config();

const {
  Materiel,
  Marque,
  Modele,
  TypeMateriel,
} = require("../../services/sequelize");
const { _setRandomNumber } = require("../data");

const url =
  "https://worldofwarcraft.com/fr-fr/character/eu/dalaran/bab%C3%B8ul%C3%AFnet";

const marques = [{ marque: "toto" }, { marque: "tata" }];

const types = [
  {
    type: "serveur",
  },
  {
    type: "terminal",
  },
  {
    type: "imprimante",
  },
];

const modeles = [
  { modele: "mega coffee server", url },
  { modele: "toto-book 3000", url },
  { modele: "super printer 4000", url },
];

const matos = [
  {
    type: 1,
    marque: 2,
    modele: 1,
  },
  {
    type: 2,
    marque: 1,
    modele: 2,
  },
  {
    type: 3,
    marque: 1,
    modele: 3,
  },
];

async function createMMT() {
  await TypeMateriel.bulkCreate(types);
  await Marque.bulkCreate(marques);
  await Modele.bulkCreate(modeles);
}

async function createParc() {
  let ref = 2000;
  for (let j = 1; j <= 50; j++) {
    const parc = [];
    for (let i = 1; i <= 30; i++) {
      const rng = _setRandomNumber(0, 2);
      parc.push({
        miseEnService: new Date(),
        url: url,
        client_id: j,
        typeMateriel_id: matos[rng].type,
        marque_id: matos[rng].marque,
        modele_id: matos[rng].modele,
        ref: ref,
      });
      ref++;
    }
    await Materiel.bulkCreate(parc);
  }
}

async function createMaterielFixtures() {
  await createMMT();
  await createParc();
}

//createMaterielFixtures();

module.exports = { createMaterielFixtures };
