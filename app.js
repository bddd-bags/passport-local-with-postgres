const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const passport = require("./lib/passport.js");
const { port = 5000 } = process.env;

// request body parser
app.use(express.urlencoded({ extended: true }));

// session handler
app.use(
  session({
    secret: "rahasia gaes",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.set("view engine", "ejs");

app.use(require("./routes/router.js"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
