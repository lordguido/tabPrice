const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.get('/', (req, res) => {
res.render('index', function (err, html) {
  res.send(html)
})
    
});

app.listen(3001);
