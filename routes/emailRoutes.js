const express = require('express');
const router = express.Router();
const Email = require('./../controllers/emailController');

router
    .route('/send')
    .post(Email.sendMail);

module.exports = router;