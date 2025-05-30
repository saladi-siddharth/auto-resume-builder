const Resume = require('../models/Resume');
const templateService = require('../services/templateService');
const pdfService = require('../services/pdfService');
const aiService = require('../services/aiService');
const { validateResumeData } = require('../utils/validator');

exports.createResume = async (req, res, next) => {
  try {
    const { error } = validateResumeData(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const resume = new Resume({
      userId: req.user.id,
      template: req.body.template,
      data: req.body.data
    });
    await resume.save();

    const preview = await templateService.renderPreview(resume);
    res.status(201).json({ resume, preview });
  } catch (error) {
    next(error);
  }
};

exports.generateResumeFromPrompt = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ message: 'Prompt is required' });

    const resumeData = await aiService.generateResumeData(prompt);
    const resume = new Resume({
      userId: req.user.id,
      template: 'modern',
      data: resumeData
    });
    await resume.save();

    const preview = await templateService.renderPreview(resume);
    res.status(201).json({ resume, preview });
  } catch (error) {
    next(error);
  }
};

exports.getResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    const preview = await templateService.renderPreview(resume);
    res.json({ resume, preview });
  } catch (error) {
    next(error);
  }
};

exports.downloadResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    const pdfBuffer = await pdfService.generatePDF(resume);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=resume-${resume._id}.pdf`
    });
    res.send(pdfBuffer);
  } catch (error) {
    next(error);
  }
};