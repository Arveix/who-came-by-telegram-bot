const app = require('express')();
const bot = require('./bot');

app.get('/sendMeMessage', async (req, res) => {
  message = req.query.message;
  if (!message) {
    return res.status(400).send("Bad request");
  } else {
    const response = await bot.sendMeMessage(message);
    if (response.ok) {
      return res.status(200).send("Done");
    } else {
      return res.status(500).send("Something went wrong");
    }
  }
});

app.listen(3000);
