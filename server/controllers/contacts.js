const fs = require('fs');
const rawData = fs.readFileSync('contact_card.json');

function getAllContacts() {
    return JSON.parse(rawData);
}

function searchByName(name) {
    const data = JSON.parse(rawData);
    let results = [];
    let regex = new RegExp(name, "i");

    data.forEach(object => {
        if(object.NAME.match(regex)) {
            results.push(object);
        };
    });

    return results;
}

module.exports.getAllContacts = getAllContacts;
module.exports.searchByName = searchByName;