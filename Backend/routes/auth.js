const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../Models/users");

const SECRET_KEY = "your_jwt_secret";


  

// Signup route (optional)
router.post("/signup", async (req, res) => {
    try {
        const {username, email, password } = req.body;
        if (!username || !email || !password) {
          return res.status(400).json({ message: "All fields are required" });
        }
    
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
        res.status(201).json({ message: "User registered successfully", token });
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
});



// Login route
router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ message: "Email and password are required" });
        }
    
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }
        else{
            const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
            return res.status(200).json({ token, message: "Login successful" });
          }
    
  
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }


});

module.exports = router;
