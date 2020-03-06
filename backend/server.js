const express = require('express');
const app = new express();
const userRouter = require('./router/userRouter');
require('./db/mongoose')
require('dotenv').config()
app.use(userRouter)
app.listen(process.env.BACKEND_PORT, () => {
    console.log("Server started")
})