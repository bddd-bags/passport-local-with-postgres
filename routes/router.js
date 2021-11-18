const router = require("express").Router();
const auth = require("../controllers/authController");
const restrict = require("../middlewares/restrict");

router.get("/", restrict, (req, res) => {
  res.render("index");
});

// buat endpoint untuk register
router
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(auth.register);

//   endpoint untuk login
router
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post(auth.login);

module.exports = router;
