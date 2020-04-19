const { router } = require("../../../express");
const { createSession } = require("../controllers/session");

router.post("/", createSession);
module.exports = router;
