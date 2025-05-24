const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const telegramToken = 'YOUR_TELEGRAM_BOT_TOKEN';
const telegramChatId = 'YOUR_TELEGRAM_CHAT_ID';
app.post('/location', (req, res) => {
  // code here
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
