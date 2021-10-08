const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    console.log(`The X-AdobeSign-ClientId request header is set too: ${req.header('X-AdobeSign-ClientId')}`)
    console.log()
    res.set('X-AdobeSign-ClientId',req.header('X-AdobeSign-ClientId'))
    res.sendStatus(200)
})

app.post('/', (req, res) => {
    console.log('About to log the body of the request')
    console.log(req.body)

    console.log(`The X-AdobeSign-ClientId request header is set too: ${req.header('X-AdobeSign-ClientId')}`)
    console.log()
    res.set('X-AdobeSign-ClientId',req.header('X-AdobeSign-ClientId'))
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
