exports.getLogin = (req, res, next) => {
  // const cookieHeader = req.get("Cookie");
  // const isLoggedIn = cookieHeader ? cookieHeader.split(";")[1].trim().split("=")[1] : undefined;

  res.render("auth/login", {
    pageTitle: "login",
    path: "Login",
    isAuthenticated: true,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("set-Cookie", "loggedIn=true;  HttpOnly");
  res.redirect("/");
};
