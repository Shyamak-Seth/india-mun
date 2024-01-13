require('dotenv').config()



const express = require('express'),
app = express(),
PORT = process.env.PORT || 3000

const indexRouter = require('./routers/indexRouter')
const emailRouter = require('./routers/emailRouter')

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '1mb'}))

app.use('/', indexRouter)
app.use('/email', emailRouter)

app.get('/chalja/:code', async (req,res) => {
    if (req.params.code === "12ka4") {
        res.send({success: true, message: "Backend Initiated"})
        console.log("backend initiated")
    } else {
        res.send({success: false, message: "Backend could not be initiated"})
    }
})

app.get("/emailas", async (req,res) => {
    console.log(req.query)
})

app.listen(PORT, console.log(`SERVER HAS BEEN CONNECTED ON PORT ${PORT}`))