require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Route pour traiter l'envoi du formulaire
app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  // Configurer le transporteur d'email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Utilisez le service de messagerie souhaité
    auth: {
      user: process.env.EMAIL_USER, // Votre adresse email
      pass: process.env.EMAIL_PASS // Votre mot de passe email ou mot de passe spécifique à l'application
    }
  });

  // Options de l'email
  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Votre adresse email pour recevoir les messages
    subject: 'Nouvelle soumission de formulaire de contact',
    text: `Vous avez reçu un nouveau message de ${email}.\n\nMessage:\n${message}`
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erreur lors de l\'envoi de l\'email : ' + error.message);
    }
    res.status(200).send('Email envoyé : ' + info.response);
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
