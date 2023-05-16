const mailer = require("./mailer");
require("dotenv").config();
const { passwordReset, enquire } = require("./emailTemplate");

const sendEmail = (receiver, subject, temporaryPassword) => {
  const result = passwordReset(receiver, temporaryPassword);

  const config = {
    from: process.env.SMTP_USER,
    to: receiver,
    subject: subject,
    text: result,
  };

  mailer.sendMail(config, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
};

const sendEnquire = (user, subject) => {

  const result = enquire(user);

  const config = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: subject,
    text: result,
  };
// console.log(mailer)
//   console.log(config)

  mailer.sendMail(config, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
};

module.exports = {
  sendEmail,
  sendEnquire,
};
