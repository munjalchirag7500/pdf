var pdf = require("pdf-creator-node");
var fs = require('fs');
const open = require('open');

// opens the url in the default browser 

 
// Read HTML Template
var html = fs.readFileSync('template.html', 'utf8');

var users = [
    {
        name: "test",
        age: "26"
    },
    {
        name: "test",
        age: "26"
    },
    {
        name: "test",
        age: "26"
    }
]
var document = {
    html: html,
    data: {
        users: users
    },
    path: "./output"+Date.now()+".pdf"
};


var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
}


pdf.create(document, options)
    .then(res => {
        console.log(res)
        open(res.filename);
    })
    .catch(error => {
        console.error(error)
    });