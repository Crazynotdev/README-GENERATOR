const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/generate', (req, res) => {
  const data = req.body;
  data.featuresList = (data.features || '').split(',').map(s => s.trim()).filter(Boolean);
  data.screenshotsList = (data.screenshots || '').split(',').map(s => s.trim()).filter(Boolean);

  ejs.renderFile(path.join(__dirname, 'views', 'readme.ejs'), data, {}, (err, str) => {
    if (err) return res.status(500).send('Erreur de génération du README');
    res.render('result', { readme: str });
  });
});

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});
