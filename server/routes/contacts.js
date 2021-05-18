const express = require('express');
const bodyParser = require('body-parser');

var router = express.Router();
var jsonencodedParser = bodyParser.json({extended: false});

//Contact controller
const contact_controller = require("../controllers/contacts");

// Route for the get method -> Return all contacts
router.get('/getAllContacts', jsonencodedParser, (req, res) => {
    res.status(200).send(contact_controller.getAllContacts());
});

// Route for the post method -> Return contacts which matches the query
router.post('/searchByName', jsonencodedParser, (req, res) => {
    res.status(200).send(contact_controller.searchByName(req.body.query, req.body.type));
});

module.exports = router;