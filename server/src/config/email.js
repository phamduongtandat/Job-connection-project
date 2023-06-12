import nodemailer from 'nodemailer';

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    secure: false,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });
};

const sendEmail = async ({ subject, text, to, html }) => {
  const transporter = createTransporter();

  if (!transporter) {
    return console.log('Email transporter is undefined!');
  }
  console.log(process.env.MAILTRAP_HOST);
  try {
    transporter.sendMail({
      from: {
        name: process.env.MAILTRAP_NAME,
        address: process.env.MAILTRAP_FROM,
      },
      to,
      subject,
      html,
      text,
    });
  } catch (err) {
    console.log(err);
  }
};

export { sendEmail };
