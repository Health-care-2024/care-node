const connection = require("../config/database");

const Location = {
    create: (userId,latitude,longitude,callback) =>{
        const query = "INSERT INTO locations_gps (userid,latitude,longitude) VALUES (?,?,?)"
        connection.query(query,[userId,latitude,longitude],callback);
    
    }
}

module.exports = Location;