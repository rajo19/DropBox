const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const File = require("../models/FileModel");
const storage = require("../middleware/storage");

const upload = multer({ storage:storage });

// Upload file API
const fileUpload =  async (req, res) => {
  try {
    const { originalname, path, size, mimetype } = req.file;

    const file = new File({
      filename: originalname,
      path: path, 
      size: size, 
      mimetype: mimetype, 
    });

    await file.save();

    res.status(201).json({ message: "File uploaded successfully", file });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Failed to upload file" });
  }
};

// Get list of files API
const fileList = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch files" });
  }
};

// Download file API
const fileDownload = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }
    res.download(file.path, file.filename);
  } catch (error) {
    res.status(500).json({ error: "Failed to download file" });
  }
};

module.exports = {
    fileUpload,
    fileList,
    fileDownload
}
