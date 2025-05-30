const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const auth = require('../middleware/auth');

router.post('/create', auth, resumeController.createResume);
router.post('/generate', auth, resumeController.generateResumeFromPrompt);
router.get('/:id', auth, resumeController.getResume);
router.get('/:id/download', auth, resumeController.downloadResume);

module.exports = router;