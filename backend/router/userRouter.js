const express = require('express')
const bodyParser = require('body-parser');
const JourneyDetails = require('../models/journeyDetails')
const User = require('../models/user')
const auth = require('./../Authorization/auth');
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
        const token = await generateToken(req.body);
        res.cookie('Token', token)
        res.status(200).json(user)
    } catch (e) {
        res.send(e)
    }
})

router.get('/journeyHistory1', auth, (req, res) => {
    try {
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router