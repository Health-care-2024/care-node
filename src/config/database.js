const mysql = require('mysql2/promise'); // Cambiar a mysql2/promise para usar Promises

const connection = mysql.createPool({
    host: "149.56.185.74",
    user: "hcperuaq_jesus811",
    password: "T3csup811",
    database: "hcperuaq_healthcareperu"
});

module.exports = connection;
