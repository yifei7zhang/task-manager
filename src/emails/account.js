const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const sendGridAPIKey = process.env.SENDGRID_API_KEY;

try {
  sgMail.setApiKey(sendGridAPIKey);
} catch (e) {
  console.log(e);
}

const sendWelcomeEmail = (email, name) => {
  try {
    sgMail.send({
      to: email,
      from: "yifei7.zhang@gmail.com",
      subject: "Welcome to Yifei's Task Manager App!",
      text: `Welcome to the app, ${name}! Let me know how you like it :)`,
    });
  } catch (e) {
    console.log(e);
  }
};

const sendCancellationEmail = (email, name) => {
  try {
    sgMail.send({
      to: email,
      from: "yifei7.zhang@gmail.com",
      subject: "We're sorry to see you go",
      text: `We're sorry to see you go ${name}. Was there anything that we could have done better?`,
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
