import { sendEmail } from '../config/email.js';

const sendResetPasswordToken = async ({ token, email, name }) => {
  const receiverName = name || email;

  await sendEmail({
    subject: 'You requested to reset your password.',
    text: `Hi ${receiverName}, to reset your password, please click on this link: http://localhost:5173/reset-password/${token} to reset your token. The token will be invalid in 15 mins`,
    to: email,
  });
};

// send email when admin create new user
const sendNewUserCredentials = async ({ email, password, name }) => {
  await sendEmail({
    subject: 'Your credentials to login at ...',
    text: `Hi ${name}, here is your credentials. Email: ${email}. Password:${password}. Change your password after you login.`,
    to: email,
  });
};

export { sendResetPasswordToken, sendNewUserCredentials };
