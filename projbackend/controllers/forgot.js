"use strict";
const nodemailer = require("nodemailer");

const User = require('../models/user');
const {validationResult} = require('express-validator');

// forgot password
exports.forgot = (req, res) => {
  const errors = validationResult(req);
  const {email} = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  User.findOne({email}, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: 'USER email does not exists'
      });
    }

    var messageId = 'Id';
    var messageUrl = 'Url';

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"GetTested" <help@gettested.com>', // sender address
        to: email, // list of receivers
        subject: "Reset Password", // Subject line
        text: "A password reset request has been made from your account.", // plain text body
        html: "<b>A password reset request has been made from your account.</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      messageId = info.messageId;
      messageUrl = nodemailer.getTestMessageUrl(info);

      // send response to front end
      return res.json({messageId, messageUrl, user: {email}});
    }

    main().catch(console.error);
  });
};
