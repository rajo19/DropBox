const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let path="./uploads/";
      try{
          if(!fs.existsSync(path)){
              fs.mkdirSync(path);
          }
      } catch(err){
          console.log(err);
          return cb(err);
      }
      cb(null, path);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

module.exports = storage;