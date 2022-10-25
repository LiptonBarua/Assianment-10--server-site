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
    const id=req.params.id;
    const selectedCourse = courses.find(course=>course.id===id);
    res.send(selectedCourse);
});

app.get('/categorie/:id', (req, res)=>{
    const id = req.params.id;
    const categorie_id = courses.filter(c=>c.courses_name===id);
    res.send(categorie_id);
})

app.listen(port, ()=>{
    console.log('bangladesh', port)
})
