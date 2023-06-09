const express = require('express')
const cors = require('cors')
const { config } = require('dotenv')
const mongoose = require('mongoose')
config()
const app = express()

//connect DB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => { console.log('DB connected') })


//middlewares for express
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('HomePage')
})

//Connect Server with PORT
app.listen(process.env.PORT, () => {
    console.log(`Server is running with port ${process.env.PORT}`)
})