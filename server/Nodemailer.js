require("dotenv").config();
const nodemailer = require("nodemailer");
const {EMAIL_ADDRESS, EMAIL_PASSWORD} = process.env;

module.exports = {
  sendConfirmation: (req, res) => {
 

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD
      }
    });

    var mailOptions = {
      from: "rootsclone@gmail.com",
      to: req.body.email,
      subject: "RootsTech Registration Confirmation",
      text:
        `Thank you ${req.body.firstname} for your ${req.body.passtype} registration.  We look forward to seeing you at RootsTech 2019. If you have any questions please contact us.`,
      html:`<h2>You are Confirmed!</h2><br/><b><p>Thank you, ${req.body.firstname} for your  ${req.body.passtype} registration.  We look forward to seeing you at RootsTech 2019. If you have any questions please contact us.</p></b><br/><br/><strong>Sincerely,<br/><br/>The RootsTech Family</strong>`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
};
