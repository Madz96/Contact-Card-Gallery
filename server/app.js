const express = require('express');
const cors = require('cors');

const app = express();

var contact_routes = require('./routes/contacts');

// Allow CORS for client app (http://localhost:3000)
app.use(cors({ origin: 'http://localhost:3000' }));

// Default route
app.get('/', (req, res) => {
    res.status(200).send("Contact Gallery Backend");
});

// Mount the contact routes
app.use('/contacts', contact_routes)

// Launch server on port 3100
app.listen(3100, function () {
    console.log('App istening on port 3100');
});