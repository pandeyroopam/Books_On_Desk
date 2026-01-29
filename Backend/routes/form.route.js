const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer.middleware')
const {getBookById, addBooks} = require('../controllers/form.controllers')

router.get('/:id', getBookById); // It is used to get book by id it work on their browse section

router.post('/form',  upload.array('images', 3), addBooks)

module.exports = router;