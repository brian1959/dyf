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
      html:`<h2 style='color:blue; text-align: center'>You are Confirmed!</h2><br/>
      <p style='font-size:20px; font-family: Tahoma, Geneva, Verdana, sans-serif'>Thank you, ${req.body.firstname} for your  ${req.body.passtype} registration.  We look forward to seeing you at RootsTech 2019. If you have any questions please contact us.</p>
      <br/><br/><h3 style='font-size: 20px; font-family: Tahoma, Geneva, Verdana, sans-serif '>Sincerely, <br/>  <br/> The RootsTech Family</h3>`
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
