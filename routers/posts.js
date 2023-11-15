const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

// Index
router.get("/", postController.index);

// Show
router.get("/:slug", postController.show);

// Store
router.post("/", postController.store);

module.exports = router;
