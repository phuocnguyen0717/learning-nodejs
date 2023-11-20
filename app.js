const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const User = require("./models/user");
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("655596c7b13db375bb9437e8")
    .then((user) => {
      if (user) {
        req.user = new User(user.name, user.email, user.cart, user._id);
      }
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use("/admin", adminData);
app.use(shopRoutes);

app.use(errorController.error404);

mongoConnect(() => {
  app.listen(3000);
});
