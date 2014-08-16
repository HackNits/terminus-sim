var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'terminus',
    password: 'terminus',
    database: 'terminus_sim'
}, function() {
    console.log('Connection created successfully!');
});

users = [
    {
        "reg_no": "UR11CS001",
        "id_account_types": "1",
        "id_classes_in": "1"
    }
];
