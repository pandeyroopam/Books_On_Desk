const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const authRoot = require("./routes/auth");


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use("/api", authRoot)


// app.get('/', (req, res)=>{
//     res.send('Hello world');
// });

// app.post('/books', (req, res)=>{
//     console.log(req.body);
//     res.send('Book details added successfully');
// })

// const port = 8080;
// app.listen(port, ()=>{
//     console.log(`Server started on port ${port}`);
// })


// vikas ka code



const PORT = 5000;



app.listen("5000", () => {
    console.log(`Server running on port ${PORT}`)
})
