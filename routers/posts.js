const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authenticated = require("../middlewares/authenticated");

// Index
router.get("/", postController.index);

// Show
router.get("/:slug", postController.show);

// Store
router.post("/", authenticated, postController.store);

module.exports = router;
