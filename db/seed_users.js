var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'terminus_sim',
    password: 'terminus_sim',
    database: 'terminus_sim'
}, function() {
    console.log('Connection created successfully!');
});

users = [
    {
        "reg_no": "UR11CS001",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS002",
        "id_account_types": "1",
        "id_classes_in": "5"
    },
    {
        "reg_no": "UR11CS003",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS004",
        "id_account_types": "1",
        "id_classes_in": "5"
    },
    {
        "reg_no": "UR11CS005",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS006",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS007",
        "id_account_types": "1",
        "id_classes_in": "7"
    },
    {
        "reg_no": "UR11CS010",
        "id_account_types": "1",
        "id_classes_in": "5"
    },
    {
        "reg_no": "UR11CS011",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS012",
        "id_account_types": "1",
        "id_classes_in": "2"
    },
    {
        "reg_no": "UR11CS013",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS014",
        "id_account_types": "1",
        "id_classes_in": "9"
    },
    {
        "reg_no": "UR11CS015",
        "id_account_types": "1",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS016",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS017",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS020",
        "id_account_types": "1",
        "id_classes_in": "6"
    },
    {
        "reg_no": "UR11CS021",
        "id_account_types": "2",
        "id_classes_in": "7"
    },
    {
        "reg_no": "UR11CS022",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS023",
        "id_account_types": "1",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS024",
        "id_account_types": "1",
        "id_classes_in": "5"
    },
    {
        "reg_no": "UR11CS025",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS026",
        "id_account_types": "1",
        "id_classes_in": "6"
    },
    {
        "reg_no": "UR11CS027",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS030",
        "id_account_types": "1",
        "id_classes_in": "5"
    },
    {
        "reg_no": "UR11CS031",
        "id_account_types": "1",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS032",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS033",
        "id_account_types": "1",
        "id_classes_in": "7"
    },
    {
        "reg_no": "UR11CS034",
        "id_account_types": "1",
        "id_classes_in": "6"
    },
    {
        "reg_no": "UR11CS035",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS036",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS037",
        "id_account_types": "1",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS040",
        "id_account_types": "2",
        "id_classes_in": "9"
    },
    {
        "reg_no": "UR11CS041",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS042",
        "id_account_types": "1",
        "id_classes_in": "2"
    },
    {
        "reg_no": "UR11CS043",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS044",
        "id_account_types": "1",
        "id_classes_in": "5"
    },
    {
        "reg_no": "UR11CS045",
        "id_account_types": "1",
        "id_classes_in": "8"
    },
    {
        "reg_no": "UR11CS046",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS047",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS050",
        "id_account_types": "1",
        "id_classes_in": "6"
    },
    {
        "reg_no": "UR11CS051",
        "id_account_types": "2",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS052",
        "id_account_types": "1",
        "id_classes_in": "5"
    },
    {
        "reg_no": "UR11CS053",
        "id_account_types": "1",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS054",
        "id_account_types": "2",
        "id_classes_in": "5"
    },
    {
        "reg_no": "UR11CS055",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS056",
        "id_account_types": "1",
        "id_classes_in": "2"
    },
    {
        "reg_no": "UR11CS057",
        "id_account_types": "1",
        "id_classes_in": "7"
    },
    {
        "reg_no": "UR11CS060",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS061",
        "id_account_types": "2",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS062",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS063",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS064",
        "id_account_types": "1",
        "id_classes_in": "6"
    },
    {
        "reg_no": "UR11CS065",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS066",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS067",
        "id_account_types": "1",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS070",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS071",
        "id_account_types": "2",
        "id_classes_in": "6"
    },
    {
        "reg_no": "UR11CS072",
        "id_account_types": "1",
        "id_classes_in": "2"
    },
    {
        "reg_no": "UR11CS073",
        "id_account_types": "1",
        "id_classes_in": "3"
    },
    {
        "reg_no": "UR11CS074",
        "id_account_types": "1",
        "id_classes_in": "1"
    },
    {
        "reg_no": "UR11CS075",
        "id_account_types": "1",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS076",
        "id_account_types": "1",
        "id_classes_in": "4"
    },
    {
        "reg_no": "UR11CS077",
        "id_account_types": "1",
        "id_classes_in": "3"
    }
];

for(var i=0; i<users.length; i++) {
    var query = 'INSERT INTO users (reg_no, id_account_types, id_classes_in)' +
    'VALUES ("' + users[i].reg_no + '", "' + users[i].id_account_types + '", "' + users[i].id_classes_in + '")';
    console.log(query);
    connection.query(query);
}
