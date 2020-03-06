const express = require('express')
const bodyParser = require('body-parser');
const User = require('./../models/user')
const router = express.Router()
const cors = require('cors')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
router.use(cors())

router.post('/abc', cors(), async (req, res) => {
    console.log('Hit', req.body)
    const user = new User(req.body);
    await user.save()
    res.json(req.body)
})

module.exports = router