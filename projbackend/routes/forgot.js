var express = require('express');
var router = express.Router();
const {check} = require('express-validator');
const {forgot} = require('../controllers/forgot');

// signin
router.post('/forgot', [
  check('email', 'email is required').isEmail()
], forgot);

module.exports = router;
