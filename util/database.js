const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://root:root@cluster0.6xodwkv.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "not found db";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
