const router = require('express').Router()
const {sendMail} = require('../utils/mailHelper')

// router.use(bodyParser.urlencoded({extended: true}))

// router.use(bodyParser.json())

router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// router.use(cors({origin: true}))

router.post('/', async (req, res) => {
    console.log(req.body)
    // console.log(JSON.parse(req.body))
    const myBody = req.body
    const {text, subject, userEmail} = myBody
    console.log(myBody)
    try {
        await sendMail(
            userEmail,
            "Your email has been sent",
            "We found that you wanted to contact us, we will soon reply to you.",
            null
        )
        await sendMail(
            "indiamunofficial@gmail.com",
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