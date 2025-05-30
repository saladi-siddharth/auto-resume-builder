const templates = {
  modern: {
    html: await import('../../templates/modern/template.html?raw', { assert: { type: 'text' } }).then(m => m.default),
    css: await import('../../templates/modern/template.css?raw', { assert: { type: 'text' } }).then(m => m.default)
  },
  classic: {
    html: await import('../../templates/classic/template.html?raw', { assert: { type: 'text' } }).then(m => m.default),
    css: await import('../../templates/classic/template.css?raw', { assert: { type: 'text' } }).then(m => m.default)
  }
};

export const renderTemplate = (data, templateName) => {
  const template = templates[templateName] || templates.modern;
  let html = template.html;

  html = html.replace('</head>', `<style>${template.css}</style></head>`);

  html = html.replace('{{name}}', data.name || '');
  html = html.replace('{{email}}', data.email || '');
  html = html.replace('{{phone}}', data.phone || '');
  html = html.replace('{{summary}}', data.summary || '');

  const experienceHtml = (data.experience || []).map(exp => `
    <div class="experience">
      <h3>${exp.role || ''}</h3>
      <p>${exp.company || ''} | ${exp.startDate || ''} - ${exp.endDate || ''}</p>
      <p>${exp.description || ''}</p>
    </div>
  `).join('');
  html = html.replace('{{experience}}', experienceHtml);

  const educationHtml = (data.education || []).map(edu => `
    <div class="education">
      <h3>${edu.degree || ''}</h3>
      <p>${edu.institution || ''} | ${edu.year || ''}</p>
    </div>
  `).join('');
  html = html.replace('{{education}}', educationHtml);

  const skillsHtml = (data.skills || []).map(skill => `<li>${skill}</li>`).join('');
  html = html.replace('{{skills}}', `<ul>${skillsHtml}</ul>`);

  return html;
};