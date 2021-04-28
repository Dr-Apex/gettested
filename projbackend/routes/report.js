var express = require('express');
var router = express.Router();
const {
  getReportById,
  createReport,
  getReport,
  getAllReport,
  updateReport,
  removeReport
} = require('../controllers/report');
const {isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');
const {getUserById} = require('../controllers/user');

// params
router.param('userId', getUserById);
router.param('reportId', getReportById);

// actual routers
// create
router.post(
  '/report/create/:userId',
  isSignedIn,
  isAuthenticated,
  createReport
);
// read
router.get(
  '/report/:reportId',
  getReport
);
router.get(
  '/reports',
  getAllReport
);
// update
router.put(
  '/report/:reportId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateReport
);
// delete
router.delete(
  '/report/:reportId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeReport
);

module.exports = router;
