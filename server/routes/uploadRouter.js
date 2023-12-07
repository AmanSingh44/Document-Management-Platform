const express = require("express");
const router = express.Router();
const { uploadDocument } = require("../controller/upload-controller.js");
const { upload } = require("../utils/upload.js");

router.post("/upload", upload.single("file"), uploadDocument);

module.exports = router;
