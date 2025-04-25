const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const multer  = require('multer');
const authRoot = require("./routes/auth");
const User = require("./Models/users");
const Listing = require("./Models/listing"); 
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", authRoot);
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })


  const upload = multer({ storage: storage })



  main()
  .then(()=>{ console.log('connection is sucessful') })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Books_on_desk');
}

// app.get('/', (req, res)=>{
//     res.send('Hello world');
// });

app.get('/api/books/:id', async(req, res)=>{
  try{
   const {id} = req.params;
   const books = await Listing.findById(id);
    if(!books){
        return res.status(404).send('Book not found');
    }
    return res.status(200).json(books); // Send the data
  }catch(error){
    return res.status(500).send('Error in uploading browse page');
  } 
});

// creating the book listing so that users can add their books for sale or rent
app.post('/api/books',  upload.array('images', 3), async(req, res)=>{
    try{
     const newListing = new Listing(req.body);
      if(req.files.length <= 0){
        return res.status(400).send('No files were uploaded');
      }
      if(req.body.forSale != 'rent'){
        newListing.forRent = false;
        newListing.forSale = true;
      }
       
      const imageArray = [];

    // 1. Push image URL (from API) as first image
    if (req.body.thumbnailUrl) {
      imageArray.push({
        url: req.body.thumbnailUrl,
        filename: req.body.title  // or some label like 'external'
      });
    }

       // 2. Push uploaded images
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        imageArray.push({
          url: `uploads/${file.filename}`,
          filename: file.filename
        });
      });
    }

    newListing.images = imageArray;
    
    // Save the paths of the uploaded images
      await newListing.save();
      res.status(201).send('Book details added successfully');
    }catch(err){
        console.log(err);
        return res.status(500).send('Error uploading files');
    }
});

app.get('/api/browse', async(req, res)=>{
   try{
       const allListing = await Listing.find({});
       return res.status(200).json(allListing); // Send the data
   }catch(error){
     return res.status(500).send('Error in uploading browse page');
   }
})

const PORT = 5000;
app.listen("5000", () => {
    console.log(`Server running on port ${PORT}`)
})
