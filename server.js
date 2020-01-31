const express = require('express');
const app = express();
<<<<<<< HEAD

app.use('/', express.static(__dirname + '/'));

app.listen(8085);
=======
const path = require('path');
const router = express.Router();

app.get('/', (req, res) => {
res.render('index', function (err, html) {
  res.send(html)
})
    
});

app.listen(3001);
>>>>>>> 42ba232614d7e8c623a7d2b8d24e3801534b92ee
