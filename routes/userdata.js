const router = require("express").Router();
const userdataController = require('../controllers/userdataController');

router.post("/", userdataController.userdata_create);
router.get("/", userdataController.userdata_all);
router.get("/:userdataId", userdataController.userdata_details);
router.put("/:userdataId", userdataController.userdata_update);
router.delete("/:userdataId", userdataController.userdata_delete);

module.exports = router;
