const { router } = require("../../express");
const sessionRoutes = require("./routes/sessionRoute");
router.use("/session", sessionRoutes);
module.exports = router;
