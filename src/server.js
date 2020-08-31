
const {createServer} = require('http');
let express = require('express');
var cors = require('cors');
const compression = require('compression');
const path = require('path');
let port = process.env.PORT || 3002
let request = require('request');
let querystring = require('querystring');



let app = express()
app.use(cors());

const dev = app.get('env') !== 'production';

if (!dev) {

    app.disable('x-powered-by');
    app.use(compression());
    console.log(path)
    app.use(express.static(path.resolve('../', 'build')));
    

    const nodemailer = require('nodemailer');
    const usercred = process.env['USER'];
    const passcred = process.env['PASS'];
    
    var transport = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: usercred,
            pass: passcred
        }
    }

    var transporter = nodemailer.createTransport(transport);

    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Working well')
        }
    });

    app.use(express.json());

    app.post('/send', (req, res ,next) => {
        const name = req.body.name
        const email = req.body.email
        const message = req.body.message
        var content = `Sender's Name: ${name} \nSender's Email Address: ${email} \nMessage: ${message}`


        var mail = {
            from: name,
            to: usercred,
            subject: 'Personal Website Contact Form Message',
            text: content
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.json({
                    msg: 'fail'
                })
            } else {
                res.json({
                    msg: 'success'
                })
            }
        })
    })


    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../', 'build', 'index.html'));
    })

} else {
    app.disable('x-powered-by');
    app.use(compression());
    // app.use(morgan('common'));
    console.log(path)
    app.use(express.static(path.resolve('../', 'build')));
    

    const nodemailer = require('nodemailer');
    const creds = require('./config.js');
    
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
            console.log('Working well')
        }
    });

    app.use(express.json());

    app.post('/send', (req, res ,next) => {
        const name = req.body.name
        const email = req.body.email
        const message = req.body.message
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
                    msg: 'fail'
                })
            } else {
                res.json({
                    msg: 'success'
                })
            }
        })
    })


    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../', 'build', 'index.html'));
    })
}




const server = createServer(app);

server.listen(port, err => {
  if (err) throw err;
  console.log('Server started');
})