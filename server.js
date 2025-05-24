const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const telegramToken = '6298320462:AAFgjEjGy0udiRNZRG1VVpooKYyQpj4UF6U';
const telegramChatId = '6000036430';
app.post('/location', (req, res) => {
  // code here
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
