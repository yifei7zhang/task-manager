const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const sendGridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "yifei7.zhang@gmail.com",
    subject: "Welcome to Yifei's Task Manager App!",
    text: `Welcome to the app, ${name}! Let me know how you like it :)`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "yifei7.zhang@gmail.com",
    subject: "We're sorry to see you go",
    text: `We're sorry to see you go ${name}. Was there anything that we could have done better?`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
