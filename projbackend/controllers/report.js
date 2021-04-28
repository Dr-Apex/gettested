const Report = require('../models/report');

exports.getReportById = (req, res, next, id) => {
  Report.findById(id).exec((err, report) => {
    if (err) {
      return res.status(400).json({
        error: 'Report not found in DB'
      });
    }

    req.report = report;
    next();
  });
};

// create report
exports.createReport = (req, res) => {
  const report = new Report(req.body);
  console.log(report);
  report.save((err, report) => {
    if (err) {
      return res.status(400).json({
        error: 'Not able to save report in DB'
      });
    }
    res.json({report});
    console.log(req.body);
  });
};

exports.getReport = (req, res) => {
  return res.json(req.report);
};

exports.getAllReport = (req, res) => {
  Report.find().exec((err, reports) => {
    if (err) {
      return res.status(400).json({
        error: 'No reports found'
      });
    }

    res.json(reports);
  });
};

exports.updateReport = (req, res) => {
  const report = req.report;
  report.name = req.body.name;
  report.save((err, updatedReport) => {
    if (err) {
      return res.status(400).json({
        error: 'Failed to update report'
      });
    }

    res.json(updatedReport);
  });
};

exports.removeReport = (req, res) => {
  const report = req.report;
  report.remove((err, report) => {
    if (err) {
      return res.status(400).json({
        error: 'Failed to delete this report'
      });
    }

    res.json({
      message: 'Successfully deleted'
    });
  });
};
