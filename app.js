const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + './public'))

app.post('/createPassword', function (req, res) {
    res.send(console.log(`Password entered`));
})

app.listen(port, () => console.log(`My app is alive on port ${port}!`));

