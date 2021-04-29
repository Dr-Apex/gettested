var express = require('express');
var router = express.Router();
const {getUserById, getUser, updateUser} = require('../controllers/user');
const {isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');

// middleware
router.param('userId', getUserById);

// read
router.get('/user/:userId', isSignedIn, isAuthenticated, getUser);
// update
router.put('/user/:userId', isSignedIn, isAuthenticated, updateUser);

module.exports = router;
