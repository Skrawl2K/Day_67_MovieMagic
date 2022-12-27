import express from 'express'
import fs from 'fs'
import axios from 'axios'

const PORT = 9095
const app = express()

app.set('view engine', 'ejs');


app.use((req, _, next) => {
    console.log('New request:', req.method, req.url)
    next()
});

app.get('/', (_, res) => {
    axios.get('https://developers.themoviedb.org/3/getting-started/introduction')
        .then(response => {
            res.render('home')
        })
})