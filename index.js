const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    console.log("About to log the GET body request")
    console.log(req.body)
    res.sendStatus(200)
})

app.post('/', (req, res) => {
    console.log("About to log the POST body request")
    console.log(req.body)
    res.sendStatus(200)
})

app.put('/', (req, res) => {
    console.log("About to log the PUT body request")
    console.log(req.body)
    res.sendStatus(200)
})

app.delete('/', (req, res) => {
    console.log("About to log the DELETE body request")
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
