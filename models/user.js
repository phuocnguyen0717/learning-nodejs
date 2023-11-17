const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;
let db = getDb();
class User {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
  }
  save() {
    return db
      .collection("users")
      .insertOne(this)
      .toArray()
      .then()
      .catch((err) => {
        console.log(err);
      });
  }
  static findById(userId) {
    return db
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .next()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = User;
