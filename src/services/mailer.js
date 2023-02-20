const transporter = nodemailer.createTransport({
  host: process.env.SMTP,
  port: process.env.PORT,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

function sendEmail(dest, refMateriel, statut, contrat, ticketReference) {
  const date = new Date().toLocaleString();
  transporter.sendMail({
    from: process.env.FROM,
    to: process.env.TO,
    subject: `ne pas répondre - à conserver `,
    html: `<p>Bonjour, une nouvelle intervention vient d'être créée pour le matériel avec la référence n° ${refMateriel} le ${new Date().toLocaleDateString()}</p>
      <p>Le statut actuel du ticket est : ${statut}.</p>
      <p>Votre numéro de contrat: ${contrat}</p>
      <p>La référence du ticket: ${ticketReference}</p>`,
  });
}
