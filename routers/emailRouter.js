const router = require('express').Router()
const {sendMail} = require('../utils/mailHelper')
const cors = require('cors')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}))

router.use(bodyParser.json())

router.use(cors({origin: true}))

router.post('/', async (req, res) => {
    const myBody = req.body
    const {text, subject, userEmail} = myBody
    try {
        await sendMail(
            userEmail,
            subject,
            text,
            null
        )
        await sendMail(
            process.env.FROM_EMAIL,
            subject,
            text,
            null
        )
        res.send({success: true, msg: 'Success!'})
    } catch (e) {
        res.send({success: false, msg: 'Failure'})
    }
})

module.exports = router