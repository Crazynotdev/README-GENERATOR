
const inquirer = require('inquirer');
const fs = require('fs');
const ejs = require('ejs');

async function main() {
  const answers = await inquirer.prompt([
    { name: 'project', message: 'Nom du projet ?' },
    { name: 'description', message: 'Description courte du projet :' },
    { name: 'demo', message: 'Lien vers une démo (laisser vide si aucune) :' },
    { name: 'features', message: 'Liste des fonctionnalités principales (séparées par une virgule) :' },
    { name: 'installation', message: 'Instructions d\'installation :' },
    { name: 'usage', message: 'Instructions d\'utilisation :' },
    { name: 'screenshots', message: 'Chemins vers des screenshots (séparés par une virgule) :' },
    { name: 'contributing', message: 'Instructions pour contribuer :' },
    { name: 'tests', message: 'Comment lancer les tests :' },
    { name: 'roadmap', message: 'Roadmap (laisser vide si aucune) :' },
    { name: 'license', message: 'Licence :' },
    { name: 'author', message: 'Auteur :' },
    { name: 'email', message: 'Email de contact :' },
    { name: 'github', message: 'Lien vers le repo GitHub :' },
    { name: 'social', message: 'Lien vers un réseau social (Twitter, LinkedIn, etc.) :' },
    { name: 'thanks', message: 'Remerciements spéciaux (laisser vide si aucun) :' }
  ]);

  // Mise en forme de certaines réponses
  answers.featuresList = answers.features.split(',').map(s => s.trim()).filter(Boolean);
  answers.screenshotsList = answers.screenshots.split(',').map(s => s.trim()).filter(Boolean);

  const template = fs.readFileSync('./templates/readme.md.ejs', 'utf-8');
  const content = ejs.render(template, answers);
  fs.writeFileSync('README.md', content);

  console.log('README.md généré avec succès !');
}

main();
