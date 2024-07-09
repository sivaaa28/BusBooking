import axios from 'axios';

const sendSMS = (to, message) => {
  return axios.post('/send-sms', {
    to,
    message
  });
};

export default sendSMS;
