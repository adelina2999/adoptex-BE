const router = require("express").Router();
const kittyRoutes = require("./kitty-routes");
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/kitty", kittyRoutes);

module.exports = router;
