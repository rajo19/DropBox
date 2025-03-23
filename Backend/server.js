const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const connection = require('./db/db');
connection.on('connected', ()=> {
    console.log('MongoDB is connected successfully')
});
connection.on('error', (error)=> {
    console.log('MongoDB connection failed', error)
});

const fileRouter = require('./routes/file.route');
app.use('/file',fileRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});