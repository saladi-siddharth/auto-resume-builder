const Joi = require('joi');

const resumeDataSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().optional(),
  summary: Joi.string().optional(),
  experience: Joi.array().items(
    Joi.object({
      company: Joi.string().optional(),
      role: Joi.string().optional(),
      startDate: Joi.string().optional(),
      endDate: Joi.string().optional(),
      description: Joi.string().optional()
    })
  ).optional(),
  education: Joi.array().items(
    Joi.object({
      institution: Joi.string().optional(),
      degree: Joi.string().optional(),
      year: Joi.string().optional()
    })
  ).optional(),
  skills: Joi.array().items(Joi.string()).optional()
});

exports.validateResumeData = (data) => {
  return resumeDataSchema.validate(data);
};