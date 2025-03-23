const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// File Schema
const fileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    size: Number,
    mimetype: String,
});
  
const File = mongoose.model("File", fileSchema);

module.exports=File;