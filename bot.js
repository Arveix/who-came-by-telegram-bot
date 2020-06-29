const fetch = require('node-fetch');

const token = process.env.TELEGRAM_TOKEN;
const myChatId = process.env.MY_CHAT_ID;

const endpointUrl = `https://api.telegram.org/bot${token}`;
const sendMessageEndpoint = `${endpointUrl}/sendMessage`;

const sendMeMessage = async (message) => {
  var data = JSON.stringify({
    chat_id: myChatId,
    text: message
  });

  const response = await fetch(sendMessageEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });
  var retval = response.json();
  console.log(retval);
  return retval;
};

module.exports.sendMeMessage = sendMeMessage;
