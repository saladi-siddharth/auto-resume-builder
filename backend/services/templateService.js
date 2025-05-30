const fs = require('fs');
const path = require('path');
const templateMapper = require('../utils/templateMapper');

const templates = {
  modern: fs.readFileSync(path.join(__dirname, '../../templates/modern/template.html'), 'utf8'),
  classic: fs.readFileSync(path.join(__dirname, '../../templates/classic/template.html'), 'utf8')
};

exports.renderPreview = async (resume) => {
  const template = templates[resume.template] || templates.modern;
  return templateMapper.mapDataToTemplate(resume.data, template);
};