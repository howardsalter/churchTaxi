const router = require("express").Router();
const ridersController = require("../../controllers/ridersController");

// Matches with "/api/books"
router.route("/")
  .get(ridersController.findAll);

module.exports = router;
