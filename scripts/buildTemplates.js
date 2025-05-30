const fs = require('fs');
const path = require('path');

const templates = ['modern', 'classic'];

templates.forEach(template => {
  const html = fs.readFileSync(path.join(__dirname, `../templates/${template}/template.html`), 'utf8');
  const css = fs.readFileSync(path.join(__dirname, `../templates/${template}/template.css`), 'utf8');
  console.log(`Processed ${template} template`);
});