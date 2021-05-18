const fs = require('fs');
const rawData = fs.readFileSync('contact_card.json');

// Process the json file and return all objects
function getAllContacts() {
    return JSON.parse(rawData);
}

// Process the json file and return objects that matches the query
function searchByName(query, type) {
    const data = JSON.parse(rawData);
    let results = [];
    let regex = new RegExp(query, "i");

    if (type === "name") {
        data.forEach(object => {
            if (object.NAME.match(regex)) {
                results.push(object);
            };
        });
    } else {
        data.forEach(object => {
            if (object.LOCATION.match(regex)) {
                results.push(object);
            };
        });
    }

    return results;
}

module.exports.getAllContacts = getAllContacts;
module.exports.searchByName = searchByName;