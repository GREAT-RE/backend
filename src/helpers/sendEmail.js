const mailer = require('./mailer');
const {passwordReset} = require('./emailTemplate')

const sendEmail = (receiver, subject, temporaryPassword) => {

    const result = passwordReset(receiver, temporaryPassword)

            console.log(result)
            const config ={
            from: 'amanda-barata_student2023@wilder.school',
            to: receiver,
            subject: subject,
            text: result,
        }

        console.log(config)

        /*mailer.sendMail(
            config,
            (err, info) => {
                if(err) console.log(err);
                else console.log(info);
            });*/

        };


module.exports = {
    sendEmail
}