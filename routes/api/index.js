const router = require("express").Router();
const articleRoutes = require("./routes");

router.use("/api", routes);

module.exports = router;

