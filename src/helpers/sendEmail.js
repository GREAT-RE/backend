const mailer = require('./mailer');
require("dotenv").config();
const {passwordReset} = require('./emailTemplate')

const sendEmail = (receiver, subject, temporaryPassword) => {

    const result = passwordReset(receiver, temporaryPassword)

            const config ={
            from: process.env.SMTP_USER,
            to: receiver,
            subject: subject,
            text: result,
        }


        mailer.sendMail(
            config,
            (err, info) => {
                if(err) console.log(err);
                else console.log(info);
        });

        };


module.exports = {
    sendEmail
}