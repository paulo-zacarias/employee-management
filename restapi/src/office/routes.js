const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getOffices);
router.post("/", controller.addOffice);
router.get("/:id", controller.getOfficeById);
router.delete("/:id", controller.deleteOffice);
router.put("/:id", controller.updateOffice);

module.exports = router;
