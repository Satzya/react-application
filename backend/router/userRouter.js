const express = require('express')
const bodyParser = require('body-parser');
const JourneyDetails = require('../models/journeyDetails')
const User = require('../models/user')
const router = express.Router()
const generateToken = require('./../token/generateToken')
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post('/saveDetails', async (req, res) => {
    const journeyDetails = new JourneyDetails(req.body);
    await journeyDetails.save()
    res.json(req.body)
})

router.post('/loginDetails', async (req, res, next) => {
    try {
        const user = await User.findOne({ userName: `${req.body.userName}`, password: `${req.body.password}` })
        console.log('PPP')
        const token = await generateToken(req.body);
        console.log(token)
        res.cookie('Token', token)
        res.status(200).send(user)
    } catch (e) {
        res.send(e)
    }
})

module.exports = router