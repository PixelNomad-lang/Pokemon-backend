const express = require('express');
const router = express.Router();
const { sendContactForm, subscribe } = require('../controllers/formController');

router.post('/contact', sendContactForm);
//router.post('/subscribe', subscribe);

module.exports = router;
