const express = require("express");
const router = express.Router();
const {Review} = require("../controllers/review")

router.post('/:id', Review) ;

module.exports = router;