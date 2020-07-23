const fs = require('fs');
const management = require('./dataManagementBL');

let details;
try {
    fs.readFile('details.json', { encoding: "utf8" }, (err, data) => {
        if (err) {
            throw new Error(err)
        }
        details = JSON.parse(data);
        management(details);
    })
} catch (error) {
    console.log(error);
}