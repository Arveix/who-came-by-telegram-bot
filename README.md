# who-came-by-telegram-bot
A Telegram bot to alert you of messages from a text box on your website

## What exactly does this thing do?
This repo has a ready-to-deploy endpoint which will take a message as a query string and
send it to you on Telegram. This is so much simpler than the "use email to contact" process.
If you want to deploy this as part of another app, you can paste the code from `bot.js` and
`server.js` into your node.js app.

It uses the Telegram Bot API (specifically the [sendMessage](https://core.telegram.org/bots/api#sendmessage) API)
to communicate with Telegram.

## Using it
You'll need to deploy this app somewhere first. 

This is ready-to-go on Heroku, you can just:
1. Fork this repo
2. Go to the [Heroku dashboard](https://dashboard.heroku.com/) and deploy from your GitHub (see this
[article](https://devcenter.heroku.com/articles/github-integration))

You can deploy it similarly on other hosting providers.

Then you'll also need a bot token. To do this start a chat with [Botfather](https://t.me/BotFather) on your
Telegram. Use the command `/newbot`, follow the setup and then save the Bot ID somewhere. 
Now we'll need a chat id for the private chat between you and your bot. For this we'll use the Telegram API directly.
Start a conversation with your new bot and send a message. Now copy the bot id you previosuly saved and 
go to `https://api.telegram.org/bot{THE_BOT_ID_COMES_HERE}/getUpdates`. This will give you a JSON response of the
messages the bot has received. It will probably be easy to figure out your message. Now copy the value of `chat_id` and
save it somewhere.

We'll need to set the bot token and chat id as environment variables by the names `TELEGRAM_TOKEN`and `MY_CHAT_ID`
respectively. You can do this in Heroku by changing the config vars
(see [this](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard) for help).

That's it! Now the last step is integrating this endpoint with your frontend. To do this, create a form or textarea element.
Set it so that when it is submitted, it will send a GET request to the endpoint you previously configured
(something like `https://your-app.herokuapp.com/sendMeMessage` if you used Heroku) with the message in the `message` parameter
of query string. Make sure you properly escape the querystring for whitespace, ?, &, etc.

## See it working
See it deployed on my website https://nikochiko.me :smile:
