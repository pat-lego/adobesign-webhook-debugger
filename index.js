const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))

const logFile = 'sign-webhook.log';

app.get('/', (req, res) => {
    console.log(`The X-AdobeSign-ClientId request header is set too: ${req.header('X-AdobeSign-ClientId')}`)
    console.log()

    res.set('X-AdobeSign-ClientId', req.header('X-AdobeSign-ClientId'))
    res.sendStatus(200)
})

app.post('/', (req, res) => {
    console.log(`Received the JSON payload for agreement id ${req.body.agreement.id} - name: ${req.body.agreement.name}`)

    fs.writeFile(logFile, `${JSON.stringify(req.body)}\r\n`, { flag: "a+" }, (error) => {
        if (error) {
            console.error(`Received the following error message ${error.name} when trying to write to ${logFile}`)
        }
    })

    console.log(`The X-AdobeSign-ClientId request header is set too: ${req.header('X-AdobeSign-ClientId')}`)
    console.log()
    res.set('X-AdobeSign-ClientId', req.header('X-AdobeSign-ClientId'))
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
