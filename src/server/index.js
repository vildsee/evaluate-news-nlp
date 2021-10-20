const dotenv = require('dotenv')
dotenv.config()
const fetch = require('node-fetch')
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// var textapi = new meaningCloud({
//     application_key: "process.env.API_KEY"
// })

const app = express()
app.use(express.static('dist'))

console.log(__dirname)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const cors = require('cors')
const { runInNewContext } = require('vm')
app.use(cors())

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

const port = 8080;
// designates what port the app will listen to for incoming requests
const server = app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//API requests
const appData = {}
//GET
app.get('/meaningCloud', function (req, res) {
    res.send(appData)
    console.log('app get')
})

//POST
// app.post('/', (req, res) => {
//     let newEntry = {
//         model: req.body.model,
//         score_tag: req.body.score_tag,
//         subjectivity: req.aborted.subjectivity,
//         confidence: req.body.confidence,
//         irony: req.body.irony,
//         agreement: req.body.agreement
//     }
//     appData=newEntry
//     res.send(appData)
// })

app.post('/meaningCloud', async function (req, res) {
    const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`
    console.log(apiURL)
    const response = await fetch(apiURL)
    try {
        const data = await response.json()
        console.log(data)
        res.send(data)
    }   catch(error) {
        console.log(error)
    }
})