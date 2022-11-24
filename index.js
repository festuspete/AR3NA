const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./routes/user')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require("helmet")
const xss = require("xss-clean")
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require('morgan');
//const mg = require('mailgun.js')


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use(morgan("combined"))

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})


const port = process.env.PORT || 3000
app.use('/api/v1/ar3na', userRouter)


mongoose.connect(process.env.MONGO_URI, 
    ()=>{console.log('database is connected')})

app.listen(port, ()=>{console.log(`server is running on http:\\localhost:${port}`)})