const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const checkAuthorization = require('../utils/authorization');

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  console.log('no api routes', req);
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
