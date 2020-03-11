const express = require('express');
const app = new express();
const router = require('./router/userRouter');
const cookieParser = require('cookie-parser');
require('./db/mongoose')
require('dotenv').config()
const cors = require('cors')
app.use(cookieParser())
app.use(cors())
app.use(router)
app.listen(process.env.BACKEND_PORT, () => {
    console.log("Server started")
})