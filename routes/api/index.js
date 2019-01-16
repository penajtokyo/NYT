const router = require("express").Router();
const articleRoutes = require("./articles");

// articles routes
router.use("/articles", articleRoutes);

module.exports = router;