const express = require('express')
const bodyParser = require('body-parser');
const JourneyDetails = require('../models/journeyDetails')
const User = require('../models/user')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post('/saveDetails', async (req, res) => {
    const journeyDetails = new JourneyDetails(req.body);
    await journeyDetails.save()
    res.json(req.body)
})

router.post('/loginDetails', async (req, res, next) => {
    try {
        let user = await User.findOne({ userName: `${req.body.userName}`, password: `${req.body.password}` })
        res.send(user)
    } catch (e) {
        res.send(e)
    }
})

module.exports = router