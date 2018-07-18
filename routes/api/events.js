const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

router.route("/")
.get(eventsController.findAllEvents)
.post(eventsController.create);

router
  .route("/:id")
  .get(eventsController.findById)
  .delete(eventsController.remove);

module.exports = router;
