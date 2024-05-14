var express = require('express');
const cors = require('cors');
var app = express();
var port = 8000;
const db = require('./config/mongoose');

app.use(cors());
app.use(express.static('upload'));
app.use('/uploads', express.static('uploads'));

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log("Serving is running on port "+port);
});