import { sendEmail } from '../config/email.js';

const sendResetPasswordToken = async ({ token, email, name }) => {
  const receiverName = name || email;

  await sendEmail({
    subject: 'You requested to reset your password.',
    text: `Hi ${receiverName}, to reset your password, please click on this link: http://localhost:5173/reset-password/${token} to reset your token. The token will be invalid in 15 mins`,
    to: email,
  });
};

export { sendResetPasswordToken };
