const express = require("express");
const {
  getAPIMethods,
  getAPIMethod,
  createAPIMethod,
  deleteAPIMethod,
  updateAPIMethod,
} = require("../controllers/APIMethodController");

const router = express.Router();

// GET all APIMethods
router.get("/", getAPIMethods);

// GET a single APIMethod
router.get("/:id", getAPIMethod);

// POST a new APIMethod
router.post("/", createAPIMethod);

// DELETE a APIMethod
router.delete("/:id", deleteAPIMethod);

// UPDATE a APIMethod
router.patch("/:id", updateAPIMethod);

module.exports = router;
