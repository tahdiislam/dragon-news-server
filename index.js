const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000;

app.use(cors())

//news categories
const categories = require('./data/categories.json')

// news
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('news api running')
});

app.get('/category', (req, res) => {
    res.send(categories)
})

// specific news category by id
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    // conditional data
    if(id === '08'){
        res.send(news)
    }else{
        const selectedCategory = news.filter(n => n.category_id === id)
        res.send(selectedCategory)
    }
})

// all news
app.get('/news', (req, res) => {
    res.send(news)
})

// specific news by id
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
    // console.log(req);
})

app.listen(port, () => {
    console.log('Dragon news server running on port', port);
})