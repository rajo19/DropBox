const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// MongoDB connection
mongoose.connect("mongodb://root:password@mongodb:27017/dropbox-clone?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let connection = mongoose.connection;

module.exports = connection;
