const express = require('express');
const bodyParser = require('body-parser');

var router = express.Router();
var jsonencodedParser = bodyParser.json({extended: false});

//Contact controller
const contact_controller = require("../controllers/contacts");

router.get('/getAllContacts', jsonencodedParser, (req, res) => {
    res.status(200).send(contact_controller.getAllContacts());
});

router.post('/searchByName', jsonencodedParser, (req, res) => {
    res.status(200).send(contact_controller.searchByName(req.body.name));
});

module.exports = router;