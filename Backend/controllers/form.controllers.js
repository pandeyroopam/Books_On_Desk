const Listing = require('../Models/listing')

// It is used to get book by id it work on their browse section
const getBookById =  async(req, res)=>{
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
}

const addBooks =async(req, res)=>{
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
}


module.exports = {
  getBookById,
  addBooks
}