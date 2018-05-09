const router = require("express").Router();
// const bookRoutes = require("./books");
const riderRoutes = require("./riders");

// Book routes
//router.use("/books", bookRoutes);
router.use("/riders", riderRoutes);


module.exports = router;
