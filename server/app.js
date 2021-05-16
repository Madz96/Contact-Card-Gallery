const express = require('express');
const cors = require('cors');

const app = express();

var contact_routes = require('./routes/contacts');

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
    res.status(200).send("Contact Gallery Backend");
});

app.use('/contacts', contact_routes)

app.listen(3100, function () {
    console.log('App istening on port 3100');
});