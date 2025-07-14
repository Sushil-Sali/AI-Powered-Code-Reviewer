const express = require("express");
aiController = require("../controllers/ai.controller");
const router = express.Router();

router.post("/get-review", aiController.getReview);

module.exports = router;
