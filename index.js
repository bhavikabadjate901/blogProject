const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/blog2'
const multer = require("multer");
const path = require("path");


const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})

// dotenv.config();
app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "/images")));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const blogRouter = require('./routes/blog-route')
app.use('/blogs', blogRouter)

app.listen(9000, () => {
    console.log('Server started')
})