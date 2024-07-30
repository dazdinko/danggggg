const express = require("express");
const { createViewPath } = require("../helpers/create_view_path");

const router = express.Router();

router.get("/jobs", getJob);

module.exports = router;