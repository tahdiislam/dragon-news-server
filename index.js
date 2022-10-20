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

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.listen(port, () => {
    console.log('Dragon news server running on port', port);
})