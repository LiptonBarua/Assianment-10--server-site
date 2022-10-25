const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors())

const categories = require('./data/categories.json');
const courses = require('./data/card.json')

app.get('/categories-list', (req, res)=>{
    res.send(categories);
});

app.get('/courses/:id', (req, res)=>{
    console.log(req.params.id)
})

app.listen(port, ()=>{
    console.log('bangladesh', port)
})
