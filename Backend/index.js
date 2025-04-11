const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.post('/books', (req, res)=>{
    console.log(req.body);
    res.send('Book details added successfully');
})

const port = 8080;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})