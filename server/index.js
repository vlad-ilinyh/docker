
const express = require('express');
const bodyParser = require('body-parser-json');
const cors = require('cors');
const generator = require('randomstring');
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send(generator.generate({
        length: 10,
        charset: 'alphabetic'
    }));
});

app.listen(port, function () {
    console.log('Listening on ' + port + ' ...');
});
