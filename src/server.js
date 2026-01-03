
// src/server.js

require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3002;
const buildPath = path.join(__dirname, '..', 'build');

// ----------------- MIDDLEWARE -----------------
app.disable('x-powered-by'); // hides Express header for security
app.use(cors());
app.use(compression());
app.use(express.json());

// Enforce HTTPS only on production Heroku
if (process.env.NODE_ENV === 'production' && process.env.HEROKU === 'true') {
    const enforce = require('express-sslify');
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// ----------------- NODemailer SETUP -----------------
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify((error, success) => {
    if (error) console.error('Mailer error:', error);
    else console.log('Mailer ready');
});

// ----------------- ROUTES -----------------

// Health check
app.get('/ping', (req, res) => res.send('pong'));

// Contact form
app.post('/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const content = `Sender's Name: ${name}\nSender's Email: ${email}\nMessage: ${message}`;

        await transporter.sendMail({
            from: name,
            to: process.env.EMAIL_USER,
            subject: 'Personal Website Contact Form Message',
            text: content
        });

        res.json({ msg: 'success' });
    } catch (err) {
        console.error('Email error:', err);
        res.json({ msg: 'fail' });
    }
});

// ----------------- SERVE REACT SPA -----------------
app.use(express.static(buildPath));

// All other routes go to SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// ----------------- START SERVER -----------------
const server = createServer(app);

server.listen(port, () => console.log(`Server listening on port ${port}`))
      .on('error', (err) => console.error('Server failed to start:', err));