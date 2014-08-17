var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'terminus_sim',
    password: 'terminus_sim',
    database: 'terminus_sim'
}, function() {
    console.log('Connection created successfully!');
});

classes = [
    {
        "subject_code": "SUB_001",
        "description": "This is some crappy sample description for the subject SUB_001."
    },
    {
        "subject_code": "SUB_002",
        "description": "This is some crappy sample description for the subject SUB_002."
    },
    {
        "subject_code": "SUB_003",
        "description": "This is some crappy sample description for the subject SUB_003."
    },
    {
        "subject_code": "SUB_004",
        "description": "This is some crappy sample description for the subject SUB_004."
    },
    {
        "subject_code": "SUB_005",
        "description": "This is some crappy sample description for the subject SUB_005."
    },
    {
        "subject_code": "SUB_006",
        "description": "This is some crappy sample description for the subject SUB_006."
    },
    {
        "subject_code": "SUB_007",
        "description": "This is some crappy sample description for the subject SUB_007."
    },
    {
        "subject_code": "SUB_010",
        "description": "This is some crappy sample description for the subject SUB_010."
    },
    {
        "subject_code": "SUB_011",
        "description": "This is some crappy sample description for the subject SUB_011."
    },
    {
        "subject_code": "SUB_012",
        "description": "This is some crappy sample description for the subject SUB_012."
    },
    {
        "subject_code": "SUB_013",
        "description": "This is some crappy sample description for the subject SUB_013."
    },
    {
        "subject_code": "SUB_014",
        "description": "This is some crappy sample description for the subject SUB_014."
    }
];

for(var i=0; i<classes.length; i++) {
    var query = 'INSERT INTO classes (subject_code, description)' +
    'VALUES ("' + classes[i].subject_code + '", "' + classes[i].description + '")';
    connection.query(query);
}
