const PDFDocument = require('pdfkit');

exports.generatePDF = async (resume) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => resolve(Buffer.concat(buffers)));
    doc.on('error', reject);

    doc.font('Helvetica').fontSize(14);
    doc.text(resume.data.name, { align: 'center' });
    doc.fontSize(10).text(`${resume.data.email} | ${resume.data.phone}`, { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text('Summary', { underline: true });
    doc.fontSize(10).text(resume.data.summary || '', { align: 'left' });
    doc.moveDown();

    doc.text('Experience', { underline: true });
    resume.data.experience.forEach(exp => {
      doc.fontSize(10).text(`${exp.role} at ${exp.company}`);
      doc.text(`${exp.startDate} - ${exp.endDate}`);
      doc.text(exp.description);
      doc.moveDown();
    });

    doc.text('Education', { underline: true });
    resume.data.education.forEach(edu => {
      doc.fontSize(10).text(`${edu.degree} at ${edu.institution}`);
      doc.text(edu.year);
      doc.moveDown();
    });

    doc.text('Skills', { underline: true });
    doc.fontSize(10).text(resume.data.skills.join(', '));
    doc.moveDown();

    doc.end();
  });
};