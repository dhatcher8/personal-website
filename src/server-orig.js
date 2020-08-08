const {createServer} = require('http');


var express = require('express');

var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
let port = process.env.PORT || 3002;


const app = express();
app.use(cors());

router.use(cors());

var transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}


const compression = require('compression');
const morgan = require('morgan');
const path = require('path');





const dev = app.get('env') !== 'production'

if (!dev) {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));

    app.use(express.static(path.resolve('../', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../', 'build', 'index.html'))
    });

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
}

if (dev) {
    // app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('dev'));

    app.use(express.static(path.resolve('../', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../', 'build', 'index.html'))
    });


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
}

// app.use(cors());
app.use(express.json());
app.use('/', router);

// console.log('Listening on port 3002');
// console.log(port);
// app.listen(port);


const server = createServer(app);

server.listen(port, err => {
    if (err) throw err;
    
    // console.log('Server started');
});
