const express = require('express')
const helmet = require('helmet')

const dataRouter = require('./data/helpers-routers/helpers-routers.js')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
    res.send(
        `<h1>Welcome to Elan's Project!</h1>`
    )
})

server.use('/api/projects', dataRouter)

module.exports = server