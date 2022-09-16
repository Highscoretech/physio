const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'valiantotung1@gmail.com',
      pass: 'sxiszkcjauivnkpb'
    }
  });

module.exports = transporter;