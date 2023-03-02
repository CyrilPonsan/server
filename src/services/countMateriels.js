function countMateriels(data) {
  const inventaire = [];
  data.forEach((item) => {
    const modele = item.modele.modele;

    let result = true;

    inventaire.forEach((element) => {
      if (element.modele === modele) {
        element.quantity++;
        result = false;
      }
    });

    if (result) {
      let newItem = {
        typeMateriel: item.typeMateriel.type,
        marque: item.marque.marque,
        modele: modele,
        quantity: 1,
      };

      inventaire.push(newItem);
      result = false;
    }
  });
  return inventaire;
}

module.exports = { countMateriels };
