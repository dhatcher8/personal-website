var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
let port = process.env.PORT || 3002;

var transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `Sender's Name: ${name} \nSender's Email Address: ${email} \nMessage: ${message}`

    var mail = {
        from: name,
        to: creds.USER,
        subject: 'Personal Website Contact Form Message',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            });
        } else {
            res.json({
                status: 'success'
            });
        }
    });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);


// console.log('Listening on port 3002');
console.log(port);
app.listen(port);