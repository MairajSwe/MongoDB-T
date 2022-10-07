const  mongoose = require ("mongoose")
const MongoClient = require('mongodb').MongoClient;
//connecting to database
const connectDatabase = async () => {
    const uri =
    "mongodb://mairaj:mairaj@localhost:8006/shop";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  client.connect((err) => {
    // perform actions on the collection object
    console.log("connect database successfully ...");
    client.close();
  });
}
module.exports = connectDatabase