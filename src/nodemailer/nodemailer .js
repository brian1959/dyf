'use-strict';
const nodemailer = require('nodemailer');

//Generates test SMTP service account from eathereal.email
//Only needed if you don't have a real mail account for testing

nodemailer.createTestAccount((err, account) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.eathereal.email',
        port: 587,
        secure: false,
        auth: {
                user: account.user, //generated ethereal user
                pass: account.pass // generated ethereal password

        }
    });

    let mailOptions = {
        from: '"Brian McCann" <brian@cworegon.com>', //sender address
        to: 'Brian@solutionation.net'//list of receivers
        subject: 'Order Confirmation', //Subject Line
        text: "We look forward to seeing you at RootsTech 2019", //plain text body
        html: '<b>We look forward to seeing you at RootsTech 2019</b>' //html body
    }
})