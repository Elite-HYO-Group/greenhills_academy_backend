import { BadRequestException, Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');

@Injectable()
export class ContactService {
     
  async sendEMail(toEmail: string, textMessage: string) {
    // Set up the transporter object
    let transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    // Set up the email data
    let mailOptions = {
      to: toEmail,
      subject: 'WastezonX account verification',
      html: textMessage,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw new BadRequestException(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}
