const express = require('express');
const app = express();
app.get('/', function (req, res) {
res.send('Hello F** World!');
});
app.listen(3000, function () {
 console.log('Servidor rodando na porta 3000!');
});