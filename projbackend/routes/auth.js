var express = require('express');
var router = express.Router();
const {check} = require('express-validator');
const {signup, signout, signin, isSignedIn} = require('../controllers/auth');

router.post('/signup', [
  check('name', 'name should be atleast 3 char').isLength({ min: 3 }),
  check('email', 'email is required').isEmail(),
  check('phone', 'phone number is required').isLength({ min: 1 }),
  check('password', 'password should be atleast 8 char').isLength({ min: 8 })
], signup);

router.post('/signin', [
  check('email', 'email is required').isEmail(),
  check('password', 'password field is required').isLength({ min: 1 })
], signin);

router.get('/signout', signout);

module.exports = router;
