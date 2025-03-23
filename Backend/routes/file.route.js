const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const {
    fileUpload,
    fileList,
    fileDownload
} = require('../controllers/file.controller');

const storage = require("../middleware/storage");
const upload = multer({ storage:storage });

const router = require('express').Router();

// Upload file API
router.post("/upload", upload.single("file"), fileUpload);

// Get list of files API
router.get("/files", fileList);

// Download file API
router.get("/files/:id", fileDownload);

module.exports = router;


