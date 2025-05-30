const _ = require('lodash');

exports.mapDataToTemplate = (data, template) => {
  let html = template;
  html = html.replace('{{name}}', _.escape(data.name || ''));
  html = html.replace('{{email}}', _.escape(data.email || ''));
  html = html.replace('{{phone}}', _.escape(data.phone || ''));
  html = html.replace('{{summary}}', _.escape(data.summary || ''));

  const experienceHtml = (data.experience || []).map(exp => `
    <div class="experience">
      <h3>${_.escape(exp.role)}</h3>
      <p>${_.escape(exp.company)} | ${_.escape(exp.startDate)} - ${_.escape(exp.endDate)}</p>
      <p>${_.escape(exp.description)}</p>
    </div>
  `).join('');
  html = html.replace('{{experience}}', experienceHtml);

  const educationHtml = (data.education || []).map(edu => `
    <div class="education">
      <h3>${_.escape(edu.degree)}</h3>
      <p>${_.escape(edu.institution)} | ${_.escape(edu.year)}</p>
    </div>
  `).join('');
  html = html.replace('{{education}}', educationHtml);

  const skillsHtml = (data.skills || []).map(skill => `<li>${_.escape(skill)}</li>`).join('');
  html = html.replace('{{skills}}', `<ul>${skillsHtml}</ul>`);

  return html;
};