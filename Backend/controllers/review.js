const Review = require("../Models/review");

const Reviews = async(req, res) => {
    try{
        const user = req.user._id;
        console.log(user);
        const {review, rating, listingId} = req.body;
        if (!review || !rating || !listingId) {
            return res.status(400).json({ message: "All fields are required" });
        }
          
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}