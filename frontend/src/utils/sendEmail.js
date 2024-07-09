import emailjs from 'emailjs-com';

const sendEmail = (to, subject, body) => {
  const templateParams = {
    to_email: to,
    subject: subject,
    message: body,
  };

  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_EMAILJS_USER_ID
  );
};

export default sendEmail;
