const express = require('express');
const app = new express();
const userRouter = require('./router/userRouter');
require('./db/mongoose')
require('dotenv').config()
const cors = require('cors')
app.use(cors())
app.use(userRouter)
app.listen(process.env.BACKEND_PORT, () => {
    console.log("Server started")
})