const { MongoClient } = require("mongodb");
var connectionString = "mongodb://localhost:27017/Students";
const client = new MongoClient(connectionString);

function getConnection(callback) {
  client.connect((err, db) => {
    if (err || !db) {
      callback(false);
    } else {
      dbConnection = db.db("Students");
      callback(true, dbConnection);
    }
  });
}

module.exports = getConnection;
