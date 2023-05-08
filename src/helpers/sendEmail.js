const mailer = require('./mailer');
require("dotenv").config();
const {passwordReset} = require('./emailTemplate')

const sendEmail = (receiver, subject, temporaryPassword) => {

    const result = passwordReset(receiver, temporaryPassword)

            console.log(result)
            const config ={
            from: process.env.SMTP_USER,
            to: receiver,
            subject: subject,
            text: result,
        }

        console.log(config)

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